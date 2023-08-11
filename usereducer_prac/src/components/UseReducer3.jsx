import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import Student from "./Student";

const reducer = (state, action) => {
  console.log("reducer 실행..", state, action);
  switch (action.type) {
    case "ADD":
      const name = action.payload.name;
      const newStudent = { id: Date.now(), name, isHere: false };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "DELETE":
      return {
        count: state.count - 1,
        students: state.students.filter((student) => {
          return student.id !== action.payload.id;
        }),
      };
    case "CHECK":
      const newStudents = state.students.map((student) => {
        if (student.id === action.payload.id) {
          return { ...student, isHere: !student.isHere };
        } else {
          return student;
        }
      });
      return {
        count: state.count,
        students: newStudents,
      };
    default:
      return state;
  }
};

const initState = {
  count: 1,
  students: [{ id: Date.now(), name: "홍길동", isHere: false }],
};

const UseReducer3 = () => {
  const [name, setName] = useState("");
  const [studentInfo, studentInfoDispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력하세요."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          studentInfoDispatch({ type: "ADD", payload: { name: name } });
        }}
      >
        추가등록
      </button>
      <hr />
      {studentInfo.students.map((student) => (
        <Student
          key={student.id}
          student={student}
          studentDispatch={studentInfoDispatch}
        />
      ))}
    </div>
  );
};

export default UseReducer3;
