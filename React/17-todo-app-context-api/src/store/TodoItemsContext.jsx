import { createContext, useState } from "react";
import initialTodoItems from "./initialTodoItems";


export const TodoItemsContext = createContext();

export const TodoItemsProvider = ({children}) => {
  
    const [todoItems, setTodoItems] = useState(initialTodoItems);
  
  
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
  
  return <TodoItemsContext.Provider value={{todoItems,addTodoItems,deleteTodoItem}}>
    {children}
  </TodoItemsContext.Provider>
}