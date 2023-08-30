import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Image, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const PostRead = () => {
  const { no } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    no: "",
    name: "",
    tel: "",
    address: "",
    photo: "",
  });
  // console.log("read no", no);
  const { name, tel, address, photo } = post;

  const callAPI = useCallback(async () => {
    const result = await axios.get(
      `https://sample.bmaster.kro.kr/contacts/${no}`
    );
    // console.log(result.data);
    setPost(result.data);
  }, [no]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  const handleDel = async () => {
    if (window.confirm(`${name} 연락처를 삭제하시겠습니까?`)) {
      await axios.delete(`https://sample.bmaster.kro.kr/contacts/${no}`);
      navigate("/contacts");
    }
  };

  return (
    <div>
      <Row className="my-5">
        <Col className="p-5">
          <h1 className="text-center mb-5">{name} 연락처 정보</h1>
          <div className="text-end mb-2">
            <Link to={`/contacts/update/${no}`}>
              <Button className="btn-sm">수정</Button>
            </Link>
            <Button variant="danger btn-sm" onClick={handleDel}>
              삭제
            </Button>
          </div>
          <Card>
            <Card.Header>
              [{no}]{"   "}
              {name}
            </Card.Header>
            <Card.Body>
              <Image src={photo} thumbnail />
            </Card.Body>
            <Card.Footer>
              {tel}
              {"  "}
              {address}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PostRead;
