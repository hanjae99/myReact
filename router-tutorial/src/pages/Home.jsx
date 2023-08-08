import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  let lis = [];
  for (let ele in data) {
    console.log(typeof ele);
    lis.push(
      <li key={ele}>
        <Link to={"/profile/" + ele}>{data[ele].name}</Link>
      </li>
    );
  }
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <h2>메뉴</h2>
      <ul>
        {/* <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile">프로필</Link>
        </li> */}
        {lis}
      </ul>
    </div>
  );
};

export default Home;
