import Button from "./Button";


const DisplayTodo = ({ todoitem, tododate, id, deleteTodoItem }) => {
  
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-5 text-truncate">{todoitem}</div>
        <div className="col-3">
          <div>{tododate}</div>
        </div>
        <div className="col-2">
          <Button type="danger" btnText="Delete" handler={() => deleteTodoItem(id)} />
        </div>
      </div>
    </div>
  );
};
export default DisplayTodo;
