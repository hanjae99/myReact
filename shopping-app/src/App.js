import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ProductPage from "./components/ProductPage";
import Detail from "./components/Detail";
import About from "./components/About";
import Member from "./components/Member";
import Location from "./components/Location";
import Cart from "./components/Cart";
import data from "./data";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [shoes, setShoes] = useState(data);
  // console.log(shoes);

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={<ProductPage shoes={shoes} setShoes={setShoes} />}
        ></Route>
        <Route path="/detail/:id?" element={<Detail data={data} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="member" element={<Member />}></Route>
          <Route path="location" element={<Location />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
