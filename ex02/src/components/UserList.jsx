import React from "react";
import { useEffect } from "react";

const User = ({ user, onDelete, onToggle }) => {
  useEffect(() => {
    // 마운트
    console.log("컴포넌트가 화면에 나타남");

    // 언마운트
    // cleanup 함수
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []); /* 두번째 파라미터에 배열을 줄 수 있음 (빈 배열 -> 초기 한번만 실행/ 배열안에 값 -> 값이 변화되면 실행/ 배열없음 -> 반복 실행) */
  // dependency array: deps

  useEffect(() => {
    console.log("user값이 설정됨", user);

    return () => {
      console.log("user가 바뀌기 전...", user);
    };
  }, [user]);

  // useEffect(() => {
  //   console.log("무조건 실행", user);
  // });

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          onToggle(user.id);
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onDelete(user.id)}>삭제</button>
    </div>
  );
};
const UserList = ({ users, onDelete, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          onDelete={onDelete}
          key={user.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
