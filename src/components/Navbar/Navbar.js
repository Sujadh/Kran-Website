import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Row className="topnavbar">
        <Col>News </Col>|<Col>CSR</Col> |<Col>Blog</Col> |<Col>Careers</Col> |
        <Col>Gallery </Col>
      </Row>
      <Row className="bottomnavbar">
        <Col>
          <NavLink to="/" className="navLink">HOME</NavLink>
        </Col>
        <Col>
          <NavLink to="/services" className="navLink">SERVICES</NavLink>
        </Col>
        <Col>
          <NavLink to="/solutions" className="navLink">SOLUTIONS</NavLink>
        </Col>
        <Col>
          <NavLink to="/about" className="navLink">ABOUT</NavLink>
        </Col>
        <Col>
          <NavLink to="/contactus" className="navLink">CONTACT US</NavLink>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
