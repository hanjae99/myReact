import React, { useRef, useState } from "react";
import InputSample from "./components/InputSample";
import EventHandling from "./components/EventHandling";
import EventPractice from "./components/EventPractice";
import { InputSample2 } from "./components/InputSample2";
import ValidationSample from "./components/ValidationSample";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import RefLocal from "./components/RefLocal";
import RefLocal2 from "./components/RefLocal2";
import Timer from "./components/Timer";
import { useMemo } from "react";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");

  // active : true 인 값만 추출후 길이 반환
  return users.filter((user) => user.active).length;
}
export const App = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onDelete = (id) => {
    console.log("삭제한 코드:" + id);
    // 밑의 코드를 한줄로 축약: filter 사용
    setUsers(users.filter((user) => user.id !== id));
    // let newUsers = [];
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].id !== id) {
    //     newUsers.push(users[i]);
    //   }
    // }
    // setUsers(newUsers);
  };
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const [showTimer, setShowTimer] = useState(false);

  // useMemo : 연산 최적화
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      {/* <InputSample></InputSample> */}
      {/* <EventHandling />
      <EventPractice />
      <InputSample2 />
      <ValidationSample></ValidationSample> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateUser>
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
      {/* <div>활성 사용자 수: {count}</div> */}
      {/* <RefLocal></RefLocal> */}
      {/* <RefLocal2></RefLocal2> */}
      {/* {showTimer && <Timer />}
      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        Toggle Timer
      </button> */}
    </div>
  );
};

export default App;
