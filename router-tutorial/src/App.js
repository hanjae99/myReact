import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import StyledComp from "./pages/StyledComp";
import ScssBtn from "./pages/ScssBtn";
import Check from "./pages/Check";
import APIPage from "./pages/APIPage";

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

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path="/about/*" element={<About />}></Route>
        <Route
          path="/profile/:username"
          element={<Profile data={data} />}
        ></Route>
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path="/articles/:id" element={<Article />}></Route>
      </Route>
      <Route path="/styledComp" element={<StyledComp />}></Route>
      <Route path="/scss" element={<ScssBtn />}></Route>
      <Route path="/check" element={<Check />}></Route>
      <Route path="/apisample" element={<APIPage />}></Route>
    </Routes>
  );
}

export default App;
