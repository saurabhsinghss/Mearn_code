export const todoItemToClientModel = (serverItem) => {
  return 
  {
    id: serverItem.id,
      todoText = serverItem.todo,
      todoDate = serverItem.date
  }
}
