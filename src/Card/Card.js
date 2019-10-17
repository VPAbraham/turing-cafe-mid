import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time,  number }) => {
  return (
    <div className="card">  
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests {number}</p>
    </div>
  ) 
}

export default Card;
