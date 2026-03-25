import Button from "./Button";
import { LuCircleEqual } from "react-icons/lu";

const NumberPad = ({displayVal,setDisplayVal}) => {
  const buttons = ["1", "2",  "3", "4", "5", "6",  "7", "8",  "9", "0", "."];

  const Operations = ["+", "-", "*", "/"];
  
  const addToDisplay = (item) => {
    setDisplayVal(displayVal + item)
    console.log(item);
  }

  const evaluateExpression = () => {
    const result = eval(displayVal);
    setDisplayVal(result);
  }

  return <>
    <Button text="c" onClickHandler={() => setDisplayVal('')}/>
    {buttons.map(item => <Button text={item} onClickHandler={() => addToDisplay(item)} key={item}/>)}
    {Operations.map(item => <Button text={item} onClickHandler={() => addToDisplay(item)} key={item}/>)}
    <Button text={<LuCircleEqual />} onClickHandler={evaluateExpression} />
  </>
}

export default NumberPad;
