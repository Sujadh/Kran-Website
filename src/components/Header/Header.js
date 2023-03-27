import React from "react";
import "./Header.css";
import { Col, Row } from "react-bootstrap";
import kran from "../../asset/kran.png";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate();
  const gotoHome = () => navigate("/");

  return (
    <div className="header">
      <Row>
        <Col md={0} xl={2}></Col>
        <Col xs={12} md={4} xl={4} style={{ textAlign: "start" }}>
          <img src={kran} alt="kranLogo" onClick={gotoHome} className="kranLogo"/>
        </Col>
        <Col xs={12} md={4} xl={4} style={{ textAlign: "end" }}>
          <Navbar />
        </Col>
        <Col md={0} xl={2}></Col>
      </Row>
    </div>
  );
}

export default Header;
