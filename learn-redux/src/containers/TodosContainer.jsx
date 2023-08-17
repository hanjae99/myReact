import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "../modules/Todos";
import Todos2 from "../components/Todos2";

const TodosContainer = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const onCreate = (text) => {
    dispatch(addTodo(text));
  };
  const onToggle = useCallback(
    (id) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  return <Todos2 todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
