import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ColorContext2 } from "../contexts/ColorContext2";

const Footer = () => {
  const value = useContext(ThemeContext);
  // ColorContext2 에 초기값이 들어있으므로 Provider 사용없이 사용가능
  const { background, color } = useContext(ColorContext2);

  return (
    <div
      className="Footer"
      style={{
        background: value.isDark ? "black" : "lightgray",
        color: value.isDark ? "white" : "black",
      }}
    >
      <button
        style={{ background: background, color: color }}
        className="bottom"
        onClick={() => {
          value.setIsDark(!value.isDark);
        }}
      >
        Dark Mode
      </button>
      <p>푸터입니다.</p>
    </div>
  );
};

export default Footer;
