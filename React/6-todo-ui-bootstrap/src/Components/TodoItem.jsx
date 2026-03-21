import Button from "./Button";


const DisplayTodo = ({ todoitem, tododate, id }) => {
  const buttonHandler = (event) => {
    console.log(`Trying to delete ${id} ${todoitem}`);
    console.log(event);
}

  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-5 text-truncate">{todoitem}</div>
        <div className="col-3">
          <div>{tododate}</div>
        </div>
        <div className="col-2">
          <Button type="danger" btnText="Delete" handler={buttonHandler} />
        </div>
      </div>
    </div>
  );
};
export default DisplayTodo;
