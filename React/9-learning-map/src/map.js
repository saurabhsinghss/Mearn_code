const todoItems = [
    { todoText: "Take Milk", todoDate: "02/09/2004", id: "1" },
    { todoText: "Go To College", todoDate: "01/02/2004", id: "2" },
  ]; 

   console.log("----------------Starting using Map-----------------");
  const todoItemsText = todoItems.map(todoItem =>
    todoItem.todoText
  );
  console.log(todoItemsText);
  console.log("----------------Ending using Map-----------------");
  


  // function convertObjectToTodoText(todoItem) {
  //   console.log(`Convert function was called with item ${JSON.stringify(todoItem)},converting this to ${todoItem.todoText}`);
  //   return todoItem.todoText;
  // }

//   console.log("----------------Starting-----------------");
//  const todoItemsText = [];
//   todoItems.forEach(item => {
//     const str = convertObjectToTodoText(item);
//     todoItemsText.push(str);
//   })

//   console.log(todoItemsText);
//   console.log("----------------Ending-----------------");