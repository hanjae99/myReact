import React, { useState } from "react";

export const Counter2 = () => {
  const [number, setNum] = useState(0);

  function increase1() {
    setNum(number + 1);
  }
  function decrease1() {
    setNum(number - 1);
  }
  return (
    // <div>
    //   <h1>{number}</h1>
    //   <button
    //     onClick={() => {
    //       setNum(number + 1);
    //     }}
    //   >
    //     +1
    //   </button>
    //   <button
    //     onClick={() => {
    //       setNum(number - 1);
    //     }}
    //   >
    //     -1
    //   </button>
    // </div>
    <div>
      <h1>{number}</h1>
      <button onClick={increase1}>+1</button>
      <button onClick={decrease1}>-1</button>
    </div>
  );
};

export default Counter2;
