import React from "react";
import { useContext } from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { TodoContext } from "../TodoContext";

const TodoListItem = ({ todo }) => {
  const { id, text, checked } = todo;
  const { todosDispatch } = useContext(TodoContext);

  return (
    <div className="todoListItem">
      <div
        className={checked ? "checkBox_checked" : "checkBox"}
        onClick={() => {
          todosDispatch({ type: "TOGGLE", id });
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => todosDispatch({ type: "DELETE", id })}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
