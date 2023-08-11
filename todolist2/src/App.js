import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useRef, useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { TodoContext } from "./TodoContext";

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "텐동 먹기",
  //     checked: false,
  //   },
  //   {
  //     id: 2,
  //     text: "상현님 다이어트 관찰",
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     text: "리액트 수업 듣기",
  //     checked: true,
  //   },
  // ]);

  const initTodos = [
    {
      id: 1,
      text: "텐동 먹기",
      checked: false,
    },
    {
      id: 2,
      text: "상현님 다이어트 관찰",
      checked: false,
    },
    {
      id: 3,
      text: "리액트 수업 듣기",
      checked: true,
    },
  ];

  const nextId = useRef(4);

  // 기능들 Reducer 로 구현
  function reducer(oldTodos, action) {
    switch (action.type) {
      case "INSERT":
        const todo = {
          id: nextId.current,
          text: action.text,
          checked: false,
        };
        nextId.current += 1;
        return oldTodos.concat(todo);
      case "DELETE":
        return oldTodos.filter((oldTodo) => oldTodo.id !== action.id);
      case "TOGGLE":
        return oldTodos.map((oldTodo) =>
          oldTodo.id === action.id
            ? { ...oldTodo, checked: !oldTodo.checked }
            : oldTodo
        );
      default:
        return oldTodos;
    }
  }

  const [todos, todosDispatch] = useReducer(reducer, initTodos);

  // // 입력 기능 구현
  // const onInsert = useCallback(
  //   (text) => {
  //     const todo = {
  //       id: nextId.current,
  //       // text: text,
  //       text /* key, value 값이 같으면 하나로 축약 가능 */,
  //       checked: false,
  //     };
  //     setTodos(todos.concat(todo));

  //     nextId.current += 1;
  //   },
  //   [todos]
  // );

  // // 삭제 기능 구현
  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos]
  // );

  // // 체크, 체크해제 기능 구현
  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //       )
  //     );
  //   },
  //   [todos]
  // );

  return (
    <TodoContext.Provider value={{ todos, todosDispatch }}>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList />
      </TodoTemplate>
    </TodoContext.Provider>
  );
}

export default App;
