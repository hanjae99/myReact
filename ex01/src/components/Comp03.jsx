import React from "react";
import Keduit from "./Keduit";

const Comp03 = () => {
  const members = [
    { no: 1, name: "김궁서", feature: "코드천재" },
    { no: 2, name: "구상모", feature: "데스크지킴이" },
    { no: 3, name: "박상현", feature: "왕돼지" },
    { no: 4, name: "김진", feature: "헬린이" },
    { no: 5, name: "이한재", feature: "유일한 정상인" },
  ];
  return (
    <div>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>특징</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <Keduit key={member.no} member={member}></Keduit>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comp03;
