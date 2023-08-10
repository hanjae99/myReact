import React, { useContext } from "react";
import LangContext from "../contexts/LangContext";

const Button = ({ onToggleLang }) => {
  // Context 받아오기
  const lang = useContext(LangContext);

  return <button onClick={onToggleLang}>{lang}</button>;
};

export default Button;
