import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const UseReducer2 = () => {
  const [number, setNumber] = useState(0);

  function moneyReducer(prevMoney, action) {
    switch (action.type) {
      case "IN":
        return prevMoney + action.money;
      case "OUT":
        if (prevMoney < action.money) {
          alert("잔고가 부족합니다. 출금불가");
          return prevMoney;
        } else {
          return prevMoney - action.money;
        }
      default:
        return false;
    }
  }

  const [money, moneyDispatch] = useReducer(moneyReducer, 0);

  function deposit() {
    moneyDispatch({ type: "IN", money: number });
  }

  function withdraw() {
    moneyDispatch({ type: "OUT", money: number });
  }

  function onChange(e) {
    setNumber(parseInt(e.target.value));
  }

  return (
    <div>
      <h2>은행에 오신걸 환영합니다.</h2>
      <p>잔고: {money}</p>
      <input type="number" value={number} onChange={onChange} />
      <button onClick={deposit}>예금</button>
      <button onClick={withdraw}>출금</button>
    </div>
  );
};

export default UseReducer2;
