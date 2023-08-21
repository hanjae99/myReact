import React from "react";

const Title = () => {
  const csst1 = {
    marginTop: "70px",
  };

  return (
    <>
      <h3 style={csst1}>MD's Pick</h3>
      <p>시선을 사로잡는 스타일링, 제품을 만나보세요.</p>
    </>
  );
};

const Title2 = () => {
  const csst2 = {
    marginTop: "70px",
  };

  return (
    <div>
      <h3 style={csst2}>여름을 위한 컬렉션</h3>
      <p>가볍게 시원하게 여름 컬렉션으로 여름을 준비해보세요!</p>
    </div>
  );
};

export default Title;
export { Title2 };
