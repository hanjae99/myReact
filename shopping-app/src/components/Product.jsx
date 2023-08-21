import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Product = (props) => {
  const { id, title, price, imgUrl } = props.shoes;
  const navigate = useNavigate();

  return (
    <>
      <div className="col-md-4">
        <Nav.Link
          onClick={() => {
            navigate("/detail/" + id);
          }}
          className="c1"
        >
          <img src={imgUrl} width="80%" alt={title} />
          <h4>{title}</h4>
          <p>{price}</p>
        </Nav.Link>
      </div>
    </>
  );
};

export default Product;
