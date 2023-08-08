import React, { useMemo, useState } from "react";

const getAverage = (list) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }

  console.log("평균값: ", sum / list.length);

  return sum / list.length;
};

const Average = () => {
  const [list, setList] = useState([10, 20, 30]);
  const [number, setNumber] = useState("");

  const onInsert = () => {
    setList(list.concat(parseInt(number)));
    setNumber("");
  };

  const average = useMemo(() => {
    return getAverage(list);
  }, [list]);
  // const average = getAverage(list);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <h2>평균값: {average}</h2>
    </div>
  );
};

export default Average;
