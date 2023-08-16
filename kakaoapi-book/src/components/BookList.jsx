import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BookItem from "./BookItem";
import "./BookList.css";

const KAKAO_KEY = "f2b85f5c085feb8e47aba905ff9ab33e";
const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK " + KAKAO_KEY,
  },
});

const kakaoSearch = (params) => {
  return Kakao.get("/v3/search/book", { params });
};

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const isLastPage = useRef(false);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSearch = useCallback(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const params = {
          query: query,
          target: "title",
          size: 12,
          page: page,
        };
        const response = await kakaoSearch(params);
        isLastPage.current = response.data.meta.is_end;
        setBooks(response.data.documents);
      } catch (error) {
        console.log("error: ", error);
      }
    }
    fetchBooks();
  }, [query, page]);

  const decreasePage = useCallback((page) => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, []);

  const increasePage = useCallback((page) => {
    setPage(page + 1);
  }, []);

  return (
    <>
      <div className="searchBox">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="책 제목을 검색하세요!"
        />
        <button onClick={onSearch}>검색</button>
      </div>
      <div className="container">
        {books.map((book) => (
          <BookItem book={book} key={book.url} />
        ))}
      </div>
      <div className={query !== "" ? "buttonBox" : "buttonBoxHidden"}>
        <button
          onClick={() => {
            decreasePage(page);
          }}
          disabled={page === 1}
        >
          이전
        </button>
        <button
          onClick={() => {
            increasePage(page);
          }}
          disabled={isLastPage.current}
        >
          다음
        </button>
      </div>
    </>
  );
};

export default BookList;
