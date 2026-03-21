import style from "./App.module.css";
import Container from "./Container";

function App() {
  return (
    <>
    <Container>
      <h1 className={style.heading}>Learning about css modules</h1>
      <p className={`${style.para} ${style.heading}`}>
        This is sample paragraph.
      </p>
      </Container>

      <Container>
        <p>This is another paragraph</p>
      </Container>
      </>
  );
}

export default App;
