import React from "react";
import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 실행 중..");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);
  return (
    <div>
      <span>타이머를 시작합니다. 콘솔창 확인</span>
    </div>
  );
};

export default Timer;
