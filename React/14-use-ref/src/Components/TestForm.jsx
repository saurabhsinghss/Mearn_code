import React, { useState } from 'react'
import { useRef } from 'react';

const TestForm = () => {
  console.log("Painting Form")

  const [firstNameVal, setFirstName] = useState();


  const clicks = useRef(0);
  const firstName = useRef(55);// it return single value in form of object.Here firstName is reference of object
  const lastName = useRef();
  const dob = useRef();
 

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Button Clicked");
    // console.log(firstName.current.value);
    // console.log(lastName.current.value);
    // console.log(dob.current.value);
  }

  // const handleOnChange = (event) => {
  //   firstName.current = event.target.value;
  //   console.log(firstName.current);
  // }

  return (
    <div>
      <h1> State Value:{firstNameVal} Ref Value:{clicks.current}times</h1>
      <form action="/submit-data" onSubmit={submitHandler}>
        <input type="text" placeholder="First Name" name="firstName" ref={firstName} onKeyDown={firstNameChangeHandler} />
        <br/>
        <input type="text" placeholder="Last Name" input="lastName" ref={lastName} />
        <br />
        <label htmlFor="dob">DOB</label>
        <input type="date" id="dob" name="dob" ref={dob} />
        <br />
        <input type="submit" onClick={() => {clicks.current += 1}} />
      </form>
    </div>
  )
}

export default TestForm