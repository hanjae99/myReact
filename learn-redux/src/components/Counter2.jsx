import React from "react";

const Counter2 = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input
          type="number"
          value={diff}
          min="1"
          onChange={(e) => {
            onSetDiff(parseInt(e.target.value));
          }}
        />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter2;
