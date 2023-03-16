import React from 'react'
import {useParams} from "react-router-dom";
import { SERVICECONTENTS } from './ServiceContent';

function Service() {
        const { id } = useParams();
  const serviceContent = SERVICECONTENTS.filter(thisProject => thisProject.id === id);
  return (
    <div>{serviceContent[0].discription}</div>
  )
}

export default Service;