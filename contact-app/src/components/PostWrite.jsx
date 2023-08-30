import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostWrite = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    tel: "",
    address: "",
  });

  const { name, tel, address } = form;

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("setForm: ", form);
  };

  const onInsert = async () => {
    if (!name) {
      alert("이름을 입력하세요!");
    } else if (!tel) {
      alert("전화번호를 입력하세요!");
    } else if (!address) {
      alert("주소를 입력하세요!");
    } else {
      await axios.post("https://sample.bmaster.kro.kr/contacts", form);
      alert("새로운 연락처가 등록되었습니다.");
      navigate("/contacts");
    }
  };

  return (
    <div>
      <Row className="my-5">
        <Col className="p-5">
          <h1 className="text-center mb-5">연락처 등록</h1>
          <Form.Control
            name="name"
            value={name}
            onChange={onChangeForm}
            className="my-3"
            placeholder="이름을 입력하세요"
          />
          <br />
          <Form.Control
            name="tel"
            value={tel}
            onChange={onChangeForm}
            placeholder="연락처를 입력하세요"
          />
          <br />
          <Form.Control
            name="address"
            value={address}
            onChange={onChangeForm}
            placeholder="주소를 입력하세요"
          />
          <div className="text-center mt-3">
            <Button
              className="me-2 px-5"
              type="button"
              onClick={() => {
                onInsert();
              }}
            >
              등록
            </Button>
            <Button variant="secondary px-5">취소</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostWrite;
