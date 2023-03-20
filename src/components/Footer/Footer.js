import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import GoogleMapReact from 'google-map-react';


function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <Row>
          <Col
            xs={2}
            md={2}
            xl={2}
            style={{ textAlign: "left", color: "white" }}
          >
            <dt>About Us</dt>
            <dt>CoE</dt>
            <dt>CSR</dt>
            <dt>Testimonial</dt>
            <dt>Clients</dt>
            <dt>Quality</dt>
          </Col>
          <Col
            xs={2}
            md={2}
            xl={2}
            style={{ textAlign: "left", color: "white" }}
          >
            <dt>Services</dt>
            <span style={{ color: "grey" }}>
              <dt>Consultancy</dt>
              <dt>Software Development</dt>
              <dt>Maintenance & Support</dt>
              <dt>Project / Product Implementation</dt>
              <dt>Hosted Solutions</dt>
              <dt>App Development</dt>
            </span>
          </Col>
          <Col
            xs={3}
            md={3}
            xl={3}
            style={{ textAlign: "left", color: "white" }}
          >
            <dt>Products</dt>
            <span style={{ color: "grey" }}>
              <dt>Public Finance</dt>
              <dt>Permits, Licensing & Compliance</dt>
              <dt>Enterprise Resource Planning</dt>
              <dt>General Administration</dt>
              <dt>Other Solutions</dt>
            </span>
          </Col>
          <Col
            xs={3}
            md={3}
            xl={3}
            style={{ textAlign: "left", color: "white" }}
          >
            <dt>News & Events</dt>
            <dt>Blog</dt>
            <dt>Career</dt>
            <dt>Gallery</dt>
            <dt>CSR</dt>
            <dt>Initiatives</dt>
            <dt>Contact Us</dt>
          </Col>
          <Col xs={2} md={2} xl={2}>
            
          </Col>
        </Row>
      </div>
      <div className="bottom-footer"></div>
    </div>
  );
}

export default Footer;
