import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const getAverage = (list) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }

  console.log("평균값: ", sum / list.length);

  return sum / list.length;
};

const AverageCallback = () => {
  const [list, setList] = useState([10, 20, 30]);
  const [number, setNumber] = useState("");
  const countRender = useRef(0);

  const onInsert = useCallback(() => {
    setList(list.concat(parseInt(number)));
    setNumber("");
  }, [list, number]);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  useEffect(() => {
    countRender.current += 1;
    console.log("onChange", countRender.current);
  }, [onChange]);

  const average = useMemo(() => {
    return getAverage(list);
  }, [list]);
  // const average = getAverage(list);

  return (
    <div>
      <input type="number" value={number} onChange={onChange} />
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

export default AverageCallback;
