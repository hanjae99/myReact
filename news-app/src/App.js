import { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./components/NewsPage";

function App() {
  // const [category, setCategory] = useState("all");

  // const onSelect = useCallback((category) => {
  //   setCategory(category);
  // }, []);

  // return (
  //   <div className="App">
  //     <div>
  //       <Categories category={category} onSelect={onSelect} />
  //       <NewsList category={category} />
  //     </div>
  //   </div>
  // );
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
