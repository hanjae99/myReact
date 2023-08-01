import React, { useRef, useState } from "react";

const RefLocal = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);
  console.log("렌더링...");

  const onIncreaseState = () => {
    setCount(count + 1);
  };

  const onIncreaseRef = () => {
    countRef.current++;
    console.log("ref:", countRef.current);
  };
  return (
    <div>
      <p>State: {count}</p>
      {/* countRef(useRef) 는 리렌더링이 일어나지 않아 화면에 표시 x */}
      <p>Ref: {countRef.current}</p>
      <button onClick={onIncreaseState}>State 값 증가</button>
      <button onClick={onIncreaseRef}>Ref 값 증가</button>
    </div>
  );
};

export default RefLocal;
