import React, { useEffect, useRef } from "react";
import './Card.css'
const Card = ({ imageUrl, description }) => {
  return (
    <div className="row card-container">
        <div className="col-lg-6 col-md-12 col-sm-12 image-container card-image">
            <img src={imageUrl} alt="Card" className="image" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 card-description">
        <ul>
        {description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
        </div>
    </div>
  );
};

export default Card;
