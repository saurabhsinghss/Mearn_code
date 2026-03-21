import './App.css'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
//import { DangerButton,SuccessButton } from './components/Button';
import Button from './components/Button';
import DynamicComponent from './components/DynamicComponent';
import StudentList from './components/StudentList';
import RandomNumber from './components/RandomNumber';
import Title from './components/Title';
function App() {
const students = ['Ram', 'shyam', 'mohan', 'gita', 'rita', 'sita',];
  const newStudents = ['Raghav', 'Soham', 'QuintonDecock', 'Abhishek', 'Ishan'];
  
  const successHandler = () => {
    console.log('success button clicked');
  };
  const dangerHandler = () => {
    console.log('Delete button clicked');
  };
  const sendHandler = () => {
    console.log('Send button clicked');
  };
  return (
    <>
      
      <Title titleText={"Hello,world"} />
      <Title titleText="Honesty is the best policy" />



      <Heading />
      <Paragraph />
      <Button type='success' btnText='Click Me' handler={successHandler} />
      <Button type='danger' btnText='Delete Me' handler={dangerHandler} />
      <Button btnText='Send'handler={sendHandler} />
      <DynamicComponent />
      <StudentList students={students} />
      <RandomNumber />
      <StudentList students={newStudents} />
    </>
  )
}

export default App
