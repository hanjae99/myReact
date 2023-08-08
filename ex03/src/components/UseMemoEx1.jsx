import React, { useMemo, useState } from "react";

const hardCalculator = (number) => {
  let now = Date.now();
  let start = now;

  while (now < start + 2000) {
    now = Date.now();
  }

  console.log("어려운 계산기");

  return number + 1000;
};

const easyCalculator = (number) => {
  console.log("쉬운 계산기");
  return number + 1;
};

const UseMemoEx1 = () => {
  const [hardNum, setHardNum] = useState(0);
  const [easyNum, setEasyNum] = useState(0);

  // useMemo를 사용하여 hardCalculator 의 리렌더링을 막아
  // easyCalculator의 작업시간 단축
  const hardSum = useMemo(() => hardCalculator(hardNum), [hardNum]);
  const easySum = useMemo(() => easyCalculator(easyNum), [easyNum]);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNum}
        onChange={(e) => {
          setHardNum(parseInt(e.target.value));
        }}
      />
      <span>+1000 = {hardSum}</span>

      <hr />
      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNum}
        onChange={(e) => {
          setEasyNum(parseInt(e.target.value));
        }}
      />
      <span>+1 = {easySum}</span>
    </div>
  );
};

export default UseMemoEx1;
