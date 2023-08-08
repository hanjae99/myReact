import React, { useEffect, useRef, useState } from "react";

const Box = ({ boxStyle }) => {
  const [style, setStyle] = useState();
  const countRender = useRef(0);

  useEffect(() => {
    countRender.current += 1;
    console.log("박스 사이즈 함수가 생성됨.", countRender.current);
    setStyle(boxStyle);
  }, [boxStyle]);

  return <div style={style}></div>;
};

export default Box;
