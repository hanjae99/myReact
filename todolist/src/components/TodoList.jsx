import React from "react";
import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1; /* 자신이 차지할 수 있는 영역을 꽉 채움 */
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        ></TodoItem>
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
