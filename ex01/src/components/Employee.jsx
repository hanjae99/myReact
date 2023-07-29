import React from "react";

const Employee = (props) => {
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
