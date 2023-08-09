import React from "react";
import Button from "../components/Button";
import "../components/Button.scss";

const ScssBtn = () => {
  return (
    <div className="Btnwrapper">
      <div>
        <Button
          size="large"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Scss 버튼
        </Button>
        <Button
          onMouseMove={() => {
            console.log("moved");
          }}
        >
          Scss 버튼
        </Button>
        <Button size="small">Scss 버튼</Button>
      </div>
      <div>
        <Button size="large" color="pink">
          Scss 버튼(핑크)
        </Button>
        <Button color="pink">Scss 버튼(핑크)</Button>
        <Button size="small" color="pink">
          Scss 버튼(핑크)
        </Button>
      </div>
      <div>
        <Button size="large" color="orange">
          Scss 버튼(오렌지)
        </Button>
        <Button color="orange">Scss 버튼(오렌지)</Button>
        <Button size="small" color="orange">
          Scss 버튼(오렌지)
        </Button>
      </div>
    </div>
  );
};

export default ScssBtn;
