import React, { useCallback, useEffect, useState } from "react";

const APISample = () => {
  const [data, setData] = useState(null);
  const [number, setNumber] = useState(1);

  const callAPI = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [number]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  return (
    <div>
      {data ? (
        <h1>
          {number}: {data.title}
        </h1>
      ) : (
        "데이터를 불러오는 중..."
      )}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        데이터 불러오기
      </button>
    </div>
  );
};

export default APISample;
