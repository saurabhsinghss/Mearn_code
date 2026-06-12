import { useContext, useEffect, useState } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if second parameter i.e [] changes then callback run i.e first function.
    setIsLoading(true);
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const items = data.todos || [];
        const newItems = items.map((item) => ({
          id: item.id,
          todoItem: item.todo,
          todoDate: "02/02/2005",
        }));
        addAllTodoItems(newItems);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // const loadItemsHandler = () => {
  //   // add api
  //   fetch("https://dummyjson.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const items = data.todos || [];
  //       const newItems = items.map((item) => ({
  //         id: item.id,
  //         todoItem: item.todo,
  //         todoDate: "02/02/2005",
  //       }));
  //       addAllTodoItems(newItems);
  //     });
  // };

  return (
    <>
      {isLoading && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && todoItems.length === 0 && <p>Enjoy your Day</p>}
      {/* <h2>Enjoy your day</h2> */}
      {/* <Button btnText="Load Todos" handler={loadItemsHandler}></Button> */}
    </>
  );
};

export default LoadItems;




