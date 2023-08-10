import React from "react";
import { ColorConsumer } from "../contexts/ColorContext";

const colors = ["red", "orange", "violet", "aqua", "green", "indigo"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  actions.setColor(color);
                }}
                onContextMenu={(e) => {
                  console.log("우클릭함");
                  e.preventDefault(); /* 마우스 우클릭시 메뉴 뜨는것 방지 */
                  actions.setSubColor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
