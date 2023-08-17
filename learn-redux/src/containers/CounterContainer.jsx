import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { decrease, increase, setDiff } from "../modules/Counter";
import Counter2 from "../components/Counter2";

const CounterContainer = () => {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual /* react-redux 내장함수, 객체의 겉값 비교해서 같으면 true => 리렌더링 x */
  );

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter2
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
