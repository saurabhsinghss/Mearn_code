import { createContext, useReducer, useState } from "react";
import initialTodoItems from "./initialTodoItems";
import todoItemReducer from "./TodoItemsReducer";


export const TodoItemsContext = createContext();



export const TodoItemsProvider = ({children}) => {
  
    const [todoItems, dispatch] = useReducer(todoItemReducer, []);
  
  
    const addTodoItems = (todoText,todoDate) => {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          todoText,todoDate
        }
      })
    }
  
    const deleteTodoItem = (todoId) => {
      dispatch({
        type: 'DELETE_ITEM',
        payload: {
          todoId
        }
      })

  }

  const addAllTodoItems = (todoItems) => {
    dispatch({
      type: 'LOAD_ALL_ITEMS',
      payload: {
        allItems: todoItems
      }
    })
  }
  
  return <TodoItemsContext.Provider value={{todoItems,addTodoItems,deleteTodoItem,addAllTodoItems}}>
    {children}
  </TodoItemsContext.Provider>
}