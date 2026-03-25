import { useState } from "react"
import Display from "./Components/Display"
import NumberPad from "./Components/NumberPad"

function App() {
  const [displayVal,setDisplayVal]=useState('');

  return (
    <>
      <h1>Calculator</h1>
      <Display textToShow={displayVal} />
      <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal} />
    </>
  )
}

export default App

