import React, { useState } from "react";
import psyduck from "./psyduck.png";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    // Fill in code for increment here
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <h2>~ Counter Assignment ~</h2>
      <p>[ {count} ]</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <p>I'm having fun with this assignment</p>
      <div className="container">
        <img src={psyduck} alt="logo" />
      </div>
    </div>
  );
}
