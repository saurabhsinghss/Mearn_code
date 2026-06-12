import DisplayTodo from "./TodoItem";

const TodoItems = ({todoItems,deleteTodoItem}) => {


  return todoItems.map((item) => (
    <DisplayTodo key={item.id} id={item.id} todoitem={item.todoItem} tododate={item.todoDate} deleteTodoItem={deleteTodoItem} />
  ));
};
export default TodoItems;



 