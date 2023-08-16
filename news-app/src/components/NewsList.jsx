import React from "react";
import NewsItem from "./NewsItem";
import "./NewsList.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UsePromise from "../lib/UsePromise";

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect 로 사이클 관리
  // async - await 로 비동기처리 (axios 활용)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true); /* 로딩중 */
  //     try {
  // const url = "https://newsapi.org/v2/top-headlines?country=kr";
  // const query = category === "all" ? "" : "&category=" + category;
  // const apiKey = "&apiKey=8c5315365e99432bb59cbb30ddf7e56b";
  // const response = await axios.get(url + query + apiKey);
  //       setArticles(response.data.articles);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false); /* 로딩 완 */
  //   };
  //   fetchData();
  // }, [category]);

  // 커스텀 hook UsePromise 사용
  const [loading, response, error] = UsePromise(() => {
    const url = "https://newsapi.org/v2/top-headlines?country=kr";
    const query = category === "all" ? "" : "&category=" + category;
    const apiKey = "&apiKey=8c5315365e99432bb59cbb30ddf7e56b";
    return axios.get(url + query + apiKey);
  }, [category]);

  if (loading) {
    return <div className="newsListBlock">data loading...</div>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <div className="newsListBlock">에러 발생!</div>;
  }

  const articles = response.data.articles;

  return (
    <div className="newsListBlock">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
