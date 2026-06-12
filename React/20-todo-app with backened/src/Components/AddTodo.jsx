import { TodoItemsContext } from "../store/TodoItemsContext";
import { todoItemToClientModel } from "../utils/MethodUtil";
import Button from "./Button";
import { useContext, useRef } from "react";

const AddTodo = () => {

  const todoTextInput = useRef();
  const todoDateInput = useRef();
  const { addTodoItems } = useContext(TodoItemsContext);

  const addHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoTextInput.current.value = '';
    todoDateInput.current.value = '';

// This below code is for to do add new data to server.
    // fetch("https://dummyjson.com/todos", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     todo: todoText
    //   })
    // }).then(res => res.json())
    //   .then(serverItem => {
    //     const clientItem = todoItemToClientModel(serverItem);
    //     addTodoItems(clientItem.todoText, clientItem.todoDate);
    // })

    // above code is just a prototype and it is not working as dummy json is not  accepting post request.
    
    addTodoItems(todoText,todoDate);
  }

  // const textChangeHandler = (event) => {
  //   console.log(event.target.value, event);
  // }

  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo here"
            // onChange={textChangeHandler}
            ref={todoTextInput} // using this in place of onChange , this will directly provide the two way binding with the todoTextInput
          />
        </div>
        <div className="col-3">
          <input type="date" className="form-control" ref={todoDateInput}/>
        </div>
        <div className="col-2">
          <Button type="success" btnText="Add" handler={addHandler}/>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;

// hello