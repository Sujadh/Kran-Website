import React from 'react';
import "./Header.css"
import { Col, Row } from 'react-bootstrap';
import kran from "../../asset/kran.png"
import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <div className="header">
      <Row>
        <Col md={0} xl={2}></Col>
        <Col xs={12} md={4} xl={4} className="logoContainer">
          <img src={kran} alt="kranLogo"/>
        </Col>
        <Col xs={12} md={4} xl={4} className="navbar">
          <Navbar />
        </Col>
        <Col md={0} xl={2}></Col>
      </Row>
    </div>
  )
}

export default Header;