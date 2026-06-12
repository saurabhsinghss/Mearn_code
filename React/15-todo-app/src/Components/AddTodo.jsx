import Button from "./Button";
import { useRef } from "react";

const AddTodo = ({addTodoItems}) => {

  const todoTextInput = useRef();
  const todoDateInput = useRef();

  const addHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoTextInput.current.value = '';
    todoDateInput.current.value = '';
    addTodoItems(todoText,todoDate);
  }

  // const textChangeHandler = (event) => {
  //   console.log(event.target.value, event);
  // }

  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo here"
            // onChange={textChangeHandler}
            ref={todoTextInput} // using this in place of onChange , this will directly provide the two way binding with the todoTextInput
          />
        </div>
        <div className="col-3">
          <input type="date" className="form-control" ref={todoDateInput}/>
        </div>
        <div className="col-2">
          <Button type="success" btnText="Add" handler={addHandler}/>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;

// hello