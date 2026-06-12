import { useContext } from "react";
import Button from "./Button";
import { TodoItemsContext } from "../store/TodoItemsContext";


const DisplayTodo = ({ todoitem, tododate, id}) => {
  
  const { deleteTodoItem } = useContext(TodoItemsContext);
  
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-5 text-truncate">{todoitem}</div>
        <div className="col-3">
          <div>{tododate}</div>
        </div>
        <div className="col-2">
          <Button type="danger" btnText="Delete" handler={() => deleteTodoItem(id)} />
        </div>
      </div>
    </div>
  );
};
export default DisplayTodo;
