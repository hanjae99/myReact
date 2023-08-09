import React from "react";
import styled from "styled-components";

const SimpleButton = styled.button`
  color: white;
  background: black;
  border-radius: 16px;
  width: 100px;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  box-shadow: 0 10px 5px rgba(2, 2, 2, 0.2);
  cursor: pointer;
`;

const LargeButton = styled(SimpleButton)`
  width: 400px;
  height: 200px;
`;

const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color: ${(props) => {
    return props.$primary ? "red" : "blue";
  }};
  background-color: ${(props) => {
    return props.$primary ? "black" : "white";
  }};
`;

const StyledComp = () => {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>ReactBtn</ReactButton>
      <ReactLargeButton>ReactLargeBtn</ReactLargeButton>
      <PrimaryButton>normal</PrimaryButton>
      <PrimaryButton $primary>Primary</PrimaryButton>
    </div>
  );
};

export default StyledComp;
