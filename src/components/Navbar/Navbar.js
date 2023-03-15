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
      <Row>
        <Col>
          <NavLink to="/" className="navLink">Home</NavLink>
        </Col>
        <Col>
          <NavLink to="/services" className="navLink">Services</NavLink>
        </Col>
        <Col>
          <NavLink to="/solutions" className="navLink">Solutions</NavLink>
        </Col>
        <Col>
          <NavLink to="/about" className="navLink">About</NavLink>
        </Col>
        <Col>
          <NavLink to="/contactus" className="navLink">Contact Us</NavLink>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
