import React from "react";
import ColorContext, { ColorConsumer } from "../contexts/ColorContext";

const ColorBox = () => {
  return (
    // <ColorContext.Consumer>
    //   {(value) => (
    //     <div
    //       style={{ width: "64px", height: "64px", background: value.color }}
    //     ></div>
    //   )}
    // </ColorContext.Consumer>
    <ColorConsumer>
      {(value) => (
        <div>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subColor,
            }}
          ></div>
        </div>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
