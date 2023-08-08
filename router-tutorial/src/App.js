import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

const data = {
  loveSwim: {
    name: "이한재",
    description: "침대가 좋은 개발자",
  },
  loveFood: {
    name: "박상현",
    description: "음식이 좋은 개발자",
  },
  loveDambae: {
    name: "김진",
    description: "담배가 좋은 개발자",
  },
};
console.log(data);
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/profile/:username"
        element={<Profile data={data} />}
      ></Route>
    </Routes>
  );
}

export default App;
