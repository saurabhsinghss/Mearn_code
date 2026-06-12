import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import { useState } from "react"
import initialTodoItems from "./data/initialTodoItems";

function App() {

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  console.log(todoItems);

  const addTodoItems = (todoText,todoDate) => {
    setTodoItems(currentItems => {
       return [...currentItems, {id:todoText,todoItem:todoText,todoDate:todoDate}]
     })
  }

  const deleteTodoItem = (todoId) => {
    console.log(`Delete todo with id: ${todoId}`);
    setTodoItems(currentItems => {
      return currentItems.filter(item => item.id !== todoId);
    })
  }


  return (
    
    <center>
       <AppName/>
      <AddTodo addTodoItems={addTodoItems} />
      <TodoItems todoItems={todoItems} deleteTodoItem={deleteTodoItem} />
    </center> 
    
  );
}

export default App;
