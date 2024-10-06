import React, { useState } from 'react';
import './index.css'; 

const Card = ({ price, title, location, time, imageUrl }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-info">
        <div className='price-icon'>
        <h2 className="card-price">Rs {price}</h2>
        <button onClick={handleFavorite} className="favorite-btn">
          {favorite ? '❤️' : '🤍'}
        </button>
        </div>
        <p className="card-title">{title}</p>
        <p className="card-location">{location}</p>
        <p className="card-time">{time} ago</p>
       
      </div>
    </div>
  );
};

export default Card;
