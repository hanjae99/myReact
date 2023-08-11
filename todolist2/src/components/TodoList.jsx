import React from "react";
import TodoListItem from "./TodoListItem";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
