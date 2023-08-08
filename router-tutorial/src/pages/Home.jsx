import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  let lis = [];
  let count = 0;
  for (let ele in data) {
    count++;
    console.log(typeof ele);
    console.log(count);
    lis.push(
      <li key={count}>
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
