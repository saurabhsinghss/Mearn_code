import { useContext } from "react";
import DisplayTodo from "./TodoItem";
import { TodoItemsContext } from "../store/TodoItemsContext";

const TodoItems = () => {

  const { todoItems } = useContext(TodoItemsContext);

  return todoItems.map((item) => (
    <DisplayTodo key={item.id} id={item.id} todoitem={item.todoItem} tododate={item.todoDate}/>
  ));
};
export default TodoItems;



 