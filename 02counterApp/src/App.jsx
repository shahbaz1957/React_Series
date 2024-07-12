import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 15;
  // const addValue = () =>{
  //   counter++;
  // }

  // const removeValue = () =>{
  //   counter--;
  //   console.log("counter value is",counter);
  // }

  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if (counter < 20) {

      // we know that useState send change in batch 
      // so if we want to update 5 times, we should 
      // make 5 calls to setCounter
      // but in this case, we only want to update once to
      // make it more efficient
      // and also to avoid unnecessary re-renders
      // so we use functional update form (preCounter => preCounter + 1)
      // preCounter will be the previous state of counter

      // if we want to update counter 5 times in one go
      // then we should use array destructuring and spread operator
      // instead of setCounter function
      // setCounter([...Array(5)].map((_, index) => preCounter + index + 1));

      // or we can use setCounter(preCounter + 5)

      // or we can use setCounter((preCounter) => preCounter + 5)

      // or we can use setCounter((preCounter) => preCounter + 1) five times
      // setCounter((preCounter) => preCounter + 1);
      //// summary is same type of update change once 

      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);


      // but we want to update 5 times then we should make 5 calls
      setCounter((preCounter) => preCounter + 1);
      setCounter((preCounter) => preCounter + 1);
      setCounter((preCounter) => preCounter + 1);
      setCounter((preCounter) => preCounter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1> Counter App</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  );
}

export default App;
