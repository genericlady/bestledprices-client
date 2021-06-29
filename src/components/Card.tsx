import React from "react";
import { Price } from "./interfaces/index";

const Card: React.FC<Price> = ({ image, description, price, href, merchant }) => {
  return (
    <div className="card">
      <a href={href} className="card-link">
        <img className="card-img-top" src={image} alt={description} />
      </a>
      <div className="card-body">
        <h4 className="card-title">{description}</h4>
      </div>
      { 
        (price && merchant) &&
        <div className="card-footer">
          <p className="card-text card-price">{price}</p>
          <p className="card-text card-merchant">{merchant}</p>
        </div>
      }
    </div>
  )
};

export default Card;
