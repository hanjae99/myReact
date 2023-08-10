import "./style.css";
import { createContext, useContext } from "react";

const themeDefault = { border: "10px solid purple" };
// createContext 함수를 이용해 컨텍스트 생성
const themeContext = createContext(themeDefault);

function App() {
  // useContext 훅으로 컨텍스트 사용
  const theme = useContext(themeContext);

  return (
    // Context.Provider 로 감싸 value 값으로 초기값을 넘겨주면
    // 하위 컴포넌트에서 useContext로 다시 값을 받을 때 value 값을 넘겨받게 됨
    <themeContext.Provider value={{ border: "10px solid blue" }}>
      <div className="root" style={theme}>
        <h1>Hello World!</h1>
        <Sub1></Sub1>
      </div>
    </themeContext.Provider>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: "10px solid green" }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

export default App;
