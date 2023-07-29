import React from "react";

const Keduit = (props) => {
  const { no, name, feature } = props.member;
  return (
    <tr>
      <th>{no}</th>
      <td>{name}</td>
      <td>{feature}</td>
    </tr>
  );
};

export default Keduit;
