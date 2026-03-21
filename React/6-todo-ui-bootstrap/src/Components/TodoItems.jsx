import DisplayTodo from "./TodoItem";

const TodoItems = () => {
  const todoItems = [
    { todoItem: "Take Milk", todoDate: "02/09/2004", id: "1" },
    { todoItem: "Go To College", todoDate: "01/02/2004", id: "2" },
  ]; // objects inside array.

  return todoItems.map((item) => (
    <DisplayTodo key={item.id} id={item.id} todoitem={item.todoItem} tododate={item.todoDate} />
  ));
};
export default TodoItems;
