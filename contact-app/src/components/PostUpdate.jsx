import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const PostUpdate = () => {
  const { no } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    no,
    name: "",
    tel: "",
    address: "",
    photo: "",
  });

  const callAPI = useCallback(async () => {
    setLoading(true);
    const result = await axios.get(
      `https://sample.bmaster.kro.kr/contacts/${no}`
    );
    console.log(result.data);
    setForm(result.data);
    setLoading(false);
  }, [no]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  const { name, tel, address } = form;

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdate = async () => {
    if (window.confirm(`${name} 연락처를 수정하시겠습니까?`)) {
      await axios.put(`https://sample.bmaster.kro.kr/contacts/${no}`, form);
      navigate("/contacts");
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-center my-5">로딩중...</h1>
      </div>
    );
  }
  return (
    <div>
      <Row className="my-5">
        <Col className="p-5">
          <h1 className="text-center mb-5">연락처 수정</h1>
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
                onUpdate();
              }}
            >
              수정
            </Button>
            <Button variant="secondary px-5" onClick={callAPI}>
              취소
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostUpdate;
