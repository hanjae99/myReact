import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const UseReducer = () => {
  // useState 훅으로 상태관리
  // const [number, setNumber] = useState(0);

  // function onIncrease() {
  //   setNumber(number + 1);
  // }

  // function onReset() {
  //   setNumber(0);
  // }

  // function onDecrease() {
  //   setNumber(number - 1);
  // }

  // useReducer 훅으로 상태 관리
  function countReducer(oldCount, action) {
    // if (action.type === "UP") {
    //   return oldCount + action.number;
    // } else if (action.type === "DOWN") {
    //   return oldCount - action.number;
    // } else if (action.type === "RESET") {
    //   return 0;
    // }
    switch (action.type) {
      case "UP":
        return oldCount + action.number;
      case "DOWN":
        return oldCount - action.number;
      case "RESET":
        return 0;
      default:
        return false;
    }
  }

  function down() {
    countDispatch({ type: "DOWN", number: number });
  }

  function up() {
    countDispatch({ type: "UP", number: number });
  }

  function reset() {
    countDispatch({ type: "RESET" });
  }

  const [count, countDispatch] = useReducer(countReducer, 0);

  const [number, setNumber] = useState(0);

  function onChange(e) {
    setNumber(parseInt(e.target.value));
  }

  return (
    <>
      {/* <button onClick={onIncrease}>+</button>
      <button onClick={onReset}>0</button>
      <button onClick={onDecrease}>-</button>
      <p>현재 값: {number}</p> */}
      <button onClick={up}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={down}>-</button>
      <p>현재 값: {count}</p>
      <input type="text" value={number} onChange={onChange} />
    </>
  );
};

export default UseReducer;
