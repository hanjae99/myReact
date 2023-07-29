import React from "react";

const Employee = (props) => {
  // 구조분해 이용
  const { no, name, dept } = props.emp;
  return (
    <div>
      <h2>
        사번: {no}, 이름: {name}, 부서: {dept}
      </h2>
    </div>
  );
};

export default Employee;
