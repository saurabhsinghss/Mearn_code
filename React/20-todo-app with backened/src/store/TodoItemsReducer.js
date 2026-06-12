const todoItemReducer = (currentItems, action) => {
  const todoText = action.payload.todoText;
  const todoDate = action.payload.todoDate;
  const todoId = action.payload.todoId;

  switch (action.type) {
    case 'ADD_ITEM':
      return [...currentItems, { id: todoText, todoItem: todoText, todoDate: todoDate }]
    
    case 'DELETE_ITEM':
      return currentItems.filter(item => item.id !== todoId);
    
    case 'LOAD_ALL_ITEMS':
      return action.payload.allItems;
    default:
      return currentItems;
  }

}
export default todoItemReducer;