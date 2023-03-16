import React from "react";
import { useParams } from "react-router-dom";
import { SERVICECONTENTS } from "./ServiceContent";
import "./Service.css";

function Service() {
  const { id } = useParams();
  const serviceContent = SERVICECONTENTS.filter(
    (thisProject) => thisProject.id === id
  );
  return (
    <div className="service">
      <h2 className="serviceheading">{serviceContent[0].heading}</h2>
      <div className="discription">{serviceContent[0].discription}</div>
    </div>
  );
}

export default Service;
