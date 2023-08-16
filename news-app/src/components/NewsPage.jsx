import React from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsPage = () => {
  // useParams 을 써서 객체형태(key, value)로 url 뒷 부분 가져옴
  let { category } = useParams();
  console.log("category: ", category);
  if (!category) {
    category = "all";
  }

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
