import React, { useRef } from "react";
import { useState } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [validate, setVal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const inputValid = useRef(null);

  const onClick = () => {
    setClicked(true);
    setVal(password === "0000"); /* 비밀번호 0000 입력 시 Val = true 가 됨 */
    inputValid.current.focus();
  };

  const onChange = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={onChange}
        className={clicked ? (validate ? "success" : "failure") : ""}
        ref={inputValid}
      />
      <button onClick={onClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
