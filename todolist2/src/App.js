import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
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
  ]);

  const nextId = useRef(4);

  // 입력 기능 구현
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        // text: text,
        text /* key, value 값이 같으면 하나로 축약 가능 */,
        checked: false,
      };
      setTodos(todos.concat(todo));

      nextId.current += 1;
    },
    [todos]
  );

  // 삭제 기능 구현
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  // 체크, 체크해제 기능 구현
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
