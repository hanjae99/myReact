import React from "react";
import propTypes from "prop-types";

const Hello = (props) => {
  const { color, name, favoriteNum } = props;
  return (
    <div style={{ color }}>
      <h1>안녕하세요 {name}</h1>
      <h1>제가 좋아하는 숫자는 {favoriteNum}</h1>
    </div>
  );
};

// name 값이 없을 때 default 값 지정
Hello.defaultProps = {
  name: "이름없음",
};

Hello.propTypes = {
  name: propTypes.string,
  favoriteNum: propTypes.number.isRequired,
};
export default Hello;
