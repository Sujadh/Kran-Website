import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Row className="topnavbar">
        <Col xs={0} md={4} xl={4}></Col>
        <Col xs={0} md={8} xl={8}>
          <Row className="topnav">
            <Col>
              <Link to="news" className="link">News</Link>
            </Col>|
            <Col>
              <Link to="csr" className="link">CSR</Link>
            </Col>|
            <Col>
              <Link to="blog" className="link">Blog</Link>
            </Col>|
            <Col>
              <Link to="careers" className="link">Careers</Link>
            </Col>|
            <Col>
              <Link to="gallery" className="link">Gallery</Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="bottomnavbar">
        <Col>
          <NavLink to="/" className="navLink">HOME</NavLink>
        </Col>
        <Col>
          <NavLink to="/services/con" className="navLink">SERVICES</NavLink>
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
