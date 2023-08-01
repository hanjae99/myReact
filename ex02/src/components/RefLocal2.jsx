import React, { useRef, useState } from "react";

const RefLocal2 = () => {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);

  let countVar = 0;

  const onRendering = () => {
    setRender(render + 1);
    console.log(render);
  };
  // ref 는 렌더링 시 그때서야 화면에 표시
  const increaseRef = () => {
    countRef.current++;
  };
  // state (상태) 로 만들지 않아서 리렌더링 x -> 화면 표시 x
  const increaseVar = () => {
    countVar++;
  };
  const printRefVar = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };
  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={onRendering}>렌더링</button>
      <button onClick={increaseRef}>Ref 증가</button>
      <button onClick={increaseVar}>Var 증가</button>
      <button onClick={printRefVar}>Ref, Var 값 출력</button>
    </div>
  );
};

export default RefLocal2;
