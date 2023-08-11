import React from "react";

const Student = ({ student, studentDispatch }) => {
  const { id, name, isHere } = student;

  return (
    <div>
      <span
        style={{ textDecoration: isHere && "line-through" }}
        onClick={() => {
          studentDispatch({ type: "CHECK", payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          studentDispatch({ type: "DELETE", payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Student;
