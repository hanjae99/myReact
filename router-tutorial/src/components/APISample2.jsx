import React, { useCallback, useEffect, useRef, useState } from "react";

const APISample2 = () => {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const lastRef = useRef(0);

  const callAPI = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        let start = (page - 1) * 10 + 1;
        let end = page * 10;
        const newTodos = json.filter(
          (todo) => todo.id >= start && todo.id <= end
        );
        setTodos(newTodos);
        lastRef.current = Math.ceil(json.length / 10);
      });
  }, [page]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  return (
    <div>
      {todos
        ? todos.map((todo) => (
            <h2 key={todo.id}>
              {todo.id}: {todo.title}
            </h2>
          ))
        : "데이터를 불러오는 중..."}
      <button
        disabled={page === 1 && true}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        이전
      </button>
      <span>
        {page} / {lastRef.current}
      </span>
      <button
        disabled={page === lastRef.current && true}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        다음
      </button>
    </div>
  );
};

export default APISample2;
