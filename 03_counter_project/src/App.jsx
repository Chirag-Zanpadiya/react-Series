import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // previous code withour hooks
  // let counter = 0;

  // after useing the using the hooks : used to ctrl the updation of the UI

  // by using hooks

  let [counter, setCounter] = useState(1);
  let [str, setStr] = useState("");
  // here we increment the counter  but values not affect in the UI
  let addvalue = () => {
    // previoues code without hooks
    // counter = counter + 1;
    // console.log(`${counter} : ${Math.random()}`)

    // after using the hooks

    if (counter <= 19) {
      counter = counter + 1;

      setCounter(counter);
    } else {
      setStr("upper then 20");
    }
  };

  let removevalue = () => {
    if (counter >= 1) {
      counter = counter - 1;
      setCounter(counter);
    } else {
      setStr("if you want to decrement the value below 0 it is not possible");
    }
  };
  return (
    <>
      <h1>Chirag Zanpadiya</h1>

      <button onClick={addvalue}>Add Values : {counter}</button>
      <br />
      <button onClick={removevalue}>Remove Values : {counter}</button>
      <p>{str}</p>
    </>
  );
}

export default App;
