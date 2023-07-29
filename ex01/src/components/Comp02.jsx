import React from "react";
import Employee from "./Employee";

const Comp02 = () => {
  const employees = [
    { no: 202301, name: "홍길동", dept: "마케팅" },
    { no: 202302, name: "이한재", dept: "인사팀" },
    { no: 202303, name: "박상현", dept: "먹방팀" },
    { no: 202304, name: "김진", dept: "헬스팀" },
    { no: 202305, name: "구상모", dept: "데스크" },
  ];

  return (
    <div>
      <h1>배열 출력</h1>
      {employees.map((emp) => (
        <Employee key={emp.no} emp={emp}></Employee>
      ))}
    </div>
  );
};

export default Comp02;
