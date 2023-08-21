import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Product from "./Product";
import Title, { Title2 } from "./Title";
import Nike from "./Nike";
import nikeData from "../nike";
import axios from "axios";
import Footer from "./Footer";

const ProductPage = ({ shoes, setShoes }) => {
  const [count, setCount] = useState(1);
  const [nike, setNike] = useState(nikeData);

  const moreList = () => {
    if (count === 1) {
      axios
        .get(
          "https://raw.githubusercontent.com/hanjae99/react-data/main/nike2.json"
        )
        .then((result) => {
          const nike2 = [...nike, ...result.data];
          setNike(nike2);
          setCount(count + 1);
        });
    } else if (count === 2) {
      axios
        .get(
          "https://raw.githubusercontent.com/hanjae99/react-data/main/nike3.json"
        )
        .then((result) => {
          const nike2 = [...nike, ...result.data];
          setNike(nike2);
          setCount(count + 1);
        });
    } else {
      alert("더 이상 상품이 없습니다.");
    }
  };
  return (
    <>
      <div className="slider"></div>
      <Title />
      <Button
        variant="outline-primary"
        onClick={() => {
          let data1 = [...shoes].sort((a, b) => (a.title > b.title ? 1 : -1));
          setShoes(data1);
        }}
      >
        이름순 정렬
      </Button>{" "}
      <Button
        variant="outline-secondary"
        onClick={() => {
          let data1 = [...shoes].sort((a, b) => (a.price > b.price ? 1 : -1));
          setShoes(data1);
        }}
      >
        낮은가격순 정렬
      </Button>{" "}
      <Button
        variant="outline-success"
        onClick={() => {
          let data1 = [...shoes].sort((a, b) => (a.price > b.price ? -1 : 1));
          setShoes(data1);
        }}
      >
        높은가격순 정렬
      </Button>{" "}
      {/* 기본 상품 진열 */}
      <div className="container">
        <div className="row">
          {shoes &&
            shoes.map((a, i) => <Product shoes={shoes[i]} key={shoes[i].id} />)}
        </div>
      </div>
      <Title2 />
      <Button variant="outline-success" onClick={moreList}>
        {" "}
        + 3개 상품 더 보기
      </Button>
      {/* 여름 컬렉션 상품 진열 */}
      <div className="container mt-5">
        <div className="row">
          {nike.map((ele, i) => (
            <Nike nike={nike[i]} key={nike[i].id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
