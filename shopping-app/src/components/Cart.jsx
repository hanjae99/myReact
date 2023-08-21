import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { addCount, deleteItem, minusCount, sortName } from "../store";

const Cart = () => {
  const smallProductStyle = {
    border: "1px solid #ddd",
    width: "100px",
    height: "80px",
    cursor: "pointer",
  };
  const state = useSelector((state) => state);
  console.log("state: ", state.cart[0].name);
  const dispatch = useDispatch();

  return (
    <div>
      <h5 className="p-5">
        {state.user.name}
        {state.user.age}의 장바구니
      </h5>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>상품이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td className="align-middle">{state.cart[i].id + 1}</td>
              <td>
                <img
                  src={state.cart[i].imgUrl}
                  alt={state.cart[i].title}
                  style={smallProductStyle}
                />
              </td>
              <td className="align-middle">{state.cart[i].title}</td>
              <td className="align-middle">{state.cart[i].count}</td>
              <td className="align-middle">
                <Button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                  variant="outline-success"
                  className="me-2"
                >
                  +
                </Button>
                <Button
                  onClick={() => {
                    dispatch(minusCount(state.cart[i].id));
                  }}
                  variant="outline-warning"
                  className="me-2"
                >
                  -
                </Button>
                <Button
                  onClick={() => {
                    dispatch(deleteItem(state.cart[i].id));
                  }}
                  variant="outline-danger"
                >
                  상품삭제
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="outline-primary"
        onClick={() => {
          dispatch(sortName(state.cart.title));
        }}
        className="mt-4"
      >
        이름순정렬
      </Button>
    </div>
  );
};

export default Cart;
