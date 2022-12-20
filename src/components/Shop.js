/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import "./Shop.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import data from "../data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";
import axios from "axios";

function Shop() {
  let [shoes, setShoes] = useState(data);
  // let [shoes2] = useState(결과.data);
  let navigate = useNavigate();
  return (
    <div className="Shop">
      <Navbar>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            홈
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/About");
              }}
            >
              About_Outlet
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/detail">Link to상세페이지</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/cart">cart</Link>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              navi(-1)
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(1);
              }}
            >
              navi(1)
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Main />
              <Card shoes={shoes} />
            </div>
          }
        />
        <Route path="/detail/:id/" element={<Detail shoes={shoes} />} />
        <Route
          path="*"
          element={<h1 style={{ fontSize: "100px" }}>404 page error</h1>}
        />
        <Route path="/cart" element={<Cart>장바구니</Cart>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>outlet</div>} />
          <Route path="location" element={<div>위치정보: Outlet</div>} />
        </Route>
      </Routes>
      {/* ajax : npm install axios 새로고침없이 json 받음. */}
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((결과) => {
              console.log(결과.data);
              console.log(shoes); // array 합치기
              let copy = [...shoes, ...결과.data]; // 괄호 벗겨서 합침.(concat대신)
              setShoes(copy);
            })
            .catch((error) => {
              console.log("error");
            });
        }}
      >
        ajax버튼
      </button>
    </div>
  );
}
function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Main() {
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "URL(" + bg + ")" }}
      ></div>
      <div className="container"> </div>
    </>
  );
}
function Card(props) {
  // console.log(props);
  return (
    <div className="row">
      {props.shoes.map((a, i) => {
        console.log(i);
        return (
          <div key={i} className="col-md-4">
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"
              }
              width="80%"
            />
            <h4>{props.shoes[i].title}</h4>
            <p>{props.shoes[i].content}</p>
            <h4>{props.shoes[i].price}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
