import React from "react";
import { Col, Row } from "react-bootstrap";
import "./HomePage.css";
import { SERVICECONTENTS } from "../Services/ServiceContent";
import ServiceCard from "../Services/ServiceCard";

function HomePage() {
  return (
    <div className="homepage">
      <section className="flagship">
        <h2 className="head">Flagship Offerings</h2>
      </section>
      <section className="coe">
        <h2 className="head">Centres Of Excellence</h2>
      </section>
      <section className="aboutus">
        <h2 className="head">About Us</h2>
      </section>
      <section className="services">
        <h2 className="head">Services</h2>
        <p className="para">
          We have the ability to work closely with our clients to understand and
          accurately identify problem areas and suggest simple but effective
          solutions. The belief that technology is only a means to the solution
          and not the solution itself forms the essence of our work culture.
        </p>
        <Row>
          {SERVICECONTENTS.map((content) => (
            <Col xs={12} md={4} xl={4}>
              <ServiceCard data={content} />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

export default HomePage;
