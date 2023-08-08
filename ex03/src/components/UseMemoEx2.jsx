import React, { useMemo, useState } from "react";

const UseMemoEx2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = (korea) => {
    console.log("korea 값", korea);

    return korea ? "한국" : "외국";
  };

  // isKorea 값에 변화가 있을 때만 location 함수 호출
  const country = useMemo(() => {
    return location(isKorea);
  }, [isKorea]);

  return (
    <div>
      <h2>하루에 몇 끼를 먹나요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h2>어느 나라에서 왔나요?</h2>
      <p>나라 : {country}</p>
      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        비행기 탑승
      </button>
    </div>
  );
};

export default UseMemoEx2;
