import React from "react";
import LangContext from "../contexts/LangContext";

const Title = () => {
  return (
    // useContext hook 대신 consumer 사용
    <LangContext.Consumer>
      {(lang) => {
        const text = lang === "en" ? "Context" : "컨텍스트";
        return <h1>{text}</h1>;
      }}
    </LangContext.Consumer>
  );
};

export default Title;
