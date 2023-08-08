import React, { useCallback, useEffect, useRef, useState } from "react";

const UseCallbackEx1 = () => {
  const [number, setNumber] = useState(0);
  const countRender = useRef(0);
  const [toggle, setToggle] = useState(true);

  // useCallback : deps 에 변화가 있을 경우 생성할 함수 지정
  const someFunc = useCallback(() => {
    console.log("함수가 생성되었습니다.", number);
  }, [number]);

  // someFunc 에 변화가 있을 때 실행
  useEffect(() => {
    countRender.current += 1;
    console.log("함수가 새롭게 생성되었습니다.", countRender.current);
  }, [someFunc]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle.toString()}
      </button>
      <button onClick={someFunc}>Call someFunc</button>
    </div>
  );
};

export default UseCallbackEx1;
