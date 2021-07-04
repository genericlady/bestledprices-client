import React from "react";
import { Product } from "./interfaces/index";

const Card: React.FC<Product> = ({ image, title, price, href, merchant }) => {
  return (
    <div className="card">
      <a href={href} className="card-link">
        <img className="card-img-top" src={image.src} alt={title} />
      </a>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
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
