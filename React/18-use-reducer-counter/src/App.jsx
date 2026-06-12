import { useReducer, useRef, useState} from 'react'


const counterReducer = (currentState, action) => {
  let newState = currentState;


  switch (action.type) { // this switch statement is in place of if and else and it is wroking same as previous one .
    case 'INCREMENT':
      newState += 1;
      break;
    case 'DECREMENT':
      newState -= 1;
      break;
    case 'RESET':
      newState = 0;
      break;
    case 'DOUBLE':
      newState *= 2;
      break;
    case 'CHANGE BY':
      newState  = newState + parseInt(action.payload.num);
      break;
    default:
      break;
    
  }
  // if (action.type === 'INCREMENT') {
  //   newState += 1;
  // }
  // else if (action.type === 'DECREMENT') {
  //   newState -= 1;
  // }
  return newState;
}

function App() {

  // const [state,dispatch] = useReducer(counterReducer,0);
  
  // const [counterVal, setCounterVal] = useState(0);

  const initialState = 0;

  const changeByInput = useRef(0);
  console.log(changeByInput.current.value);
  const [counterVal, counterDispatch] = useReducer(counterReducer, initialState);
  
  const handleIncrement = () => {
    // setCounterVal(current => current + 1);
    counterDispatch({  // action object
      type: "INCREMENT"
    });
  }

  const handleDecrement = () => {
    // setCounterVal(current => current - 1);
    counterDispatch({
      type: "DECREMENT"
    });
  }

  const handleChangeBy = () => {
    const num = changeByInput.current.value;
    changeByInput.current.value = "";
    counterDispatch({
      type: 'CHANGE BY',
      payload: {
        num : num
      }
    });
  }

  return (
    <>
      <h1>Count:{counterVal}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() =>counterDispatch({type: "RESET"})}>Reset</button>
      <button onClick={() => counterDispatch({type: "DOUBLE"})}>Double</button>
      <button onClick={handleChangeBy}>Change By</button>
      <input type="text" ref={changeByInput} placeholder='Number' />
   
    </>
  )
}

export default App
