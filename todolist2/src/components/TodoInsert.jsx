import React, { useCallback, useState } from "react";
import { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { TodoContext } from "../TodoContext";

const TodoInsert = () => {
  const [value, setValue] = useState("");
  const { todosDispatch } = useContext(TodoContext);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // const onSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     onInsert(value);
  //     setValue("");
  //   },
  //   [onInsert, value]
  // );

  return (
    <form
      className="todoInsert"
      onSubmit={(e) => {
        e.preventDefault();
        todosDispatch({ type: "INSERT", text: value });
        setValue("");
      }}
    >
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
