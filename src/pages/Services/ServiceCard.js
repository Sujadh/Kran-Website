import React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";

function ServiceCard(props) {
  const { id, heading, image, icon, miniDiscription } = props.data;
  const navigate = useNavigate();
  const handleNavigate = (value) => {
    navigate("/services/" + value);
  };
  return (
    <div className="card">
      <div className="imageconatiner">
        <img src={image} alt="images" className="serviceimage" />
        <span className="headandicon">          
          <p className="servicehead">
          <img src={icon} alt="icon" className="icon" /> &nbsp;
            <b>{heading}</b>
          </p>
        </span>
      </div>
      <p className="miniDiscription">{miniDiscription}</p>
      <p onClick={() => handleNavigate(`${id}`)} className="readmore">
        {"READ MORE>>"}
      </p>
    </div>
  );
}

export default ServiceCard;
