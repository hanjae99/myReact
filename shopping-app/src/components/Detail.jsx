import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { styled } from "styled-components";
import { Button } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

const Detail = (props) => {
  const Box = styled.div`
    padding: 20px;
    color: gray;
  `;
  const YellowBtn = styled.button`
    background-color: gold;
    color: white;
    width: 100%;
    font-size: 30px;
    padding: 100px;
    border: 1px solid #ccc;
    background-image: url("https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80");
    background-size: cover;
    background-position: center;
  `;

  let { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setFade("end");
    return () => {
      setFade("");
    };
  }, []);

  // 상품을 눌렀을 때
  if (id !== undefined) {
    id = parseInt(id);
    const { title, imgUrl, content, price } = props.data[id];
    // const { title, imgUrl, content, price } = props.data.filter(
    //   (item) => id === item.id
    // )[0];

    return (
      <div className="container">
        <div className="row">
          <div className={"container start " + fade}>
            <Box>
              <YellowBtn>지금 구매하면 10% 할인</YellowBtn>
            </Box>
          </div>
          <div className="col-md-6">
            <img src={"../" + imgUrl} alt={title} width="95%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{title}</h4>
            <p>{content}</p>
            <p>{price}</p>
            <button
              className="btn btn-danger me-2"
              onClick={() => {
                dispatch(
                  addItem({
                    id,
                    imgUrl,
                    price,
                    title,
                    count: 1,
                  })
                );
              }}
            >
              장바구니 담기
            </button>
            <Link to="/cart">
              <Button variant="outline-success">장바구니 확인하기</Button>
            </Link>
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0" className="mt-5">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
              eventKey="link0"
            >
              상품내역
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
              eventKey="link1"
            >
              배송안내
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
              eventKey="link2"
            >
              문의하기
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} />
      </div>
    );
    // nav 바에서 detail 눌렀을 때
  } else if (id === undefined) {
    return (
      <div className="container">
        {props.data.map((d) => (
          <Nav.Link
            onClick={() => {
              navigate("/detail/" + d.id);
            }}
            className="c1"
            key={d.id}
          >
            <div className="row">
              <div className="col-md-6">
                <img
                  src={"../" + d.imgUrl}
                  alt={d.title}
                  width="95%"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">{d.title}</h4>
                <p>{d.content}</p>
                <p>{d.price}</p>
                {/* <button className="btn btn-danger">주문하기</button> */}
              </div>
            </div>
          </Nav.Link>
        ))}
      </div>
    );
  }
};

function TabContent({ tab }) {
  // tab 값에 따른 인덱스 번지 값 return (tab = 0 이면 내용0)
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab];
}

export default Detail;
