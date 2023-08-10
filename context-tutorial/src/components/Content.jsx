import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";

const Content = () => {
  const value = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div
      className="Content"
      style={{
        background: value.isDark ? "black" : "lightgray",
        color: value.isDark ? "white" : "black",
      }}
    >
      <p>{user}님 좋은 하루되세요!</p>
    </div>
  );
};

export default Content;
