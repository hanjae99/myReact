import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h4>회사 정보</h4>
      {/* Route 밑의 또 Route(children) 요소들은 Outlet 으로 */}
      <Outlet></Outlet>
    </>
  );
};

export default About;
