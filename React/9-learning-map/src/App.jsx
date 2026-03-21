import List from "./Components/list";
const studentArr = ["Saurabh", "Aroma", "Satyam", "Ram", "Shyam","Sita"];

function App() {
  return (
    <>
      <h1 className="text-5xl">Learners of MERN Stack</h1>
      <List list = {studentArr}></List>
    </>
  );
}

export default App;
