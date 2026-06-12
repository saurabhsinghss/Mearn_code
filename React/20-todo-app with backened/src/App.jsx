import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import LoadItems from "./Components/LoadItems";
import TodoItems from "./Components/TodoItems";
import { TodoItemsProvider } from "./store/TodoItemsContext";

function App() {
  return (
    <TodoItemsProvider>
      <center>
        <AppName />
        <AddTodo />
        <LoadItems />
        <TodoItems />
      </center>
    </TodoItemsProvider>
  );
}

export default App;
