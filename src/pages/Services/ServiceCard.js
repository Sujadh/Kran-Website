import React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";

function ServiceCard(props) {
  const { id, heading, image, icon, discription, miniDiscription } = props.data;
  const navigate = useNavigate();
  const handleNavigate = (value) => {
    navigate("/services/" + value);
  };
  return (
    <div className="card">
      <div className="imageconatiner">
        <img src={image} alt="" className="serviceimage" />
      </div>
      <p className="servicehead"><b>{heading}</b></p>
      <p className="miniDiscription">{miniDiscription}</p>
      <p onClick={() => handleNavigate(`${id}`)} className="readmore">
        {"READ MORE>>"}
      </p>
    </div>
  );
}

export default ServiceCard;
