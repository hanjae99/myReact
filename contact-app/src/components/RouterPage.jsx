import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Homepage from "./Homepage";
import PostList from "./PostList";
import PostRead from "./PostRead";
import PostUpdate from "./PostUpdate";
import PostWrite from "./PostWrite";

const RouterPage = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contacts">연락처</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contacts" element={<PostList />}></Route>
        <Route path="/contacts/write" element={<PostWrite />}></Route>
        <Route path="/contacts/:no" element={<PostRead />}></Route>
        <Route path="/contacts/update/:no" element={<PostUpdate />}></Route>
      </Routes>
    </div>
  );
};

export default RouterPage;
