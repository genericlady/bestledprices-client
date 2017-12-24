import React from 'react';

const Card = props => {
  const {
    image,
    description,
    price,
    href,
    merchant,
  } = props.card;

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
          <p className="card-text">{price}</p>
          <p className="card-text">{merchant}</p>
        </div>
      }
    </div>
  )
};
export default Card;
