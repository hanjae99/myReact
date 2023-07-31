import React, { useState } from "react";

export const InputSample = () => {
  // const [text, setText] = useState("");
  // const [nickName, setNick] = useState("");
  const [inputs, setInputs] = useState({ name: "", nickName: "" });
  const { name, nickName } = inputs;
  const onChange = (evt) => {
    const { value, name } = evt.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={onChange}
        name="name"
        value={name}
      />
      <input
        type="text"
        placeholder="닉네임"
        onChange={onChange}
        name="nickName"
        value={nickName}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>이름값: {name}</b>
      </div>
      <div>
        <b>닉네임값: {nickName}</b>
      </div>
    </div>
  );
};

export default InputSample;
