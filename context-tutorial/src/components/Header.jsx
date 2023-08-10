import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const value = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div
      className="Header"
      style={{
        background: value.isDark ? "black" : "lightgray",
        color: value.isDark ? "white" : "black",
      }}
    >
      <h1>Welcome {user}</h1>
    </div>
  );
};

export default Header;
