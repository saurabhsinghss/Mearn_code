const StudentList = (props) => {
  return <ol>
    {
      props.students.map((student, index) => <li key={student}>{student}</li>)  
    }  
  </ol>
}
export default StudentList;