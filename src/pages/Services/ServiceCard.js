import React from 'react';
import "./ServiceContent.css";
import { useNavigate } from "react-router-dom";

function ServiceCard() {
        const { id, heading, image, icon, discription, miniDiscription } = props.data;
        const navigate = useNavigate()
        const handleNavigate = (value) => {
                navigate("/about/" + value)
        }
        return (
                <div>ServiceCard</div>
        )
}

export default ServiceCard;