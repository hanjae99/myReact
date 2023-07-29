const Student = () => {
  const style = {
    color: "red",
    backgroundColor: "yellow",
    fontSize: "30px",
  };

  const name = "홍길동";
  const nickName = "gildong hong";
  const nickName2 = "";

  return (
    <div>
      <h1 style={style}>첫번째 컴포넌트 {name}</h1>
      {name === "홍길동" ? <h2>홍길동입니다</h2> : <h2>홍길동이 아닙니다</h2>}
      {/* &&: 있으면.. ||: 없으면.. */}
      {nickName && <h2>홍길동의 별명은 {nickName}입니다</h2>}
      {nickName2 || <h2>별명이 없습니다</h2>}
    </div>
  );
};

export default Student;
