import React, { useState } from "react";

const EventPractice = () => {
  const [msg, setMsg] = useState("");
  const [username, setUsername] = useState("");
  const [writeMsg, setWriteMsg] = useState("");
  const onChangeUsername = (evt) => {
    setUsername(evt.target.value);
  };
  const onKeyDown = (evt) => {
    setWriteMsg(evt.target.value + "작성중...");
  };
  return (
    <div>
      <h1>[이벤트 연습]</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={msg}
        onChange={(evt) => {
          setMsg(evt.target.value);
        }}
        onKeyDown={onKeyDown}
      />
      <button
        onClick={(evt) => {
          alert(username);
          alert(msg);
          setMsg("");
        }}
      >
        제출
      </button>
      <div>
        <h2>{writeMsg}</h2>
      </div>
    </div>
  );
};

export default EventPractice;
