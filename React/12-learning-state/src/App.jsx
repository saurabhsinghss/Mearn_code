import { useState } from "react";
import List from "./Components/list";
//let studentArr;

function App() {
  console.log("Painting app component");

  // const studentArrState = useState(["Saurabh", "Aroma", "Satyam", "Ram", "Shyam", "Sita"]);// it gives array with two value.
  // const studentArr = studentArrState[0];
  // const setStudentArr = studentArrState[1];//setStudentArr is a function .

  const [studentArr,setStudentArr] = useState(["Saurabh", "Aroma", "Satyam", "Ram", "Shyam", "Sita"]);
  console.log("State Value is:", studentArr);
   
  
  const onChangeHandler = (event) => {
    if (event.key == "Enter") {
      console.log(event.target.value);
      const newArr = [...studentArr, event.target.value];
      event.target.value = '';
      setStudentArr(newArr)// updating array
      console.log(newArr);
    }
  }
  return (
    <>
      <h1 className="text-5xl">Learners of MERN Stack</h1>
      <List list={studentArr}></List>
      <input type="text"  placeholder="New Student Name" onKeyDown={onChangeHandler}/>
    </>
  );
}

export default App;



 
