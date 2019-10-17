import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time,  number }) => {
  return (
    <div className="card" id={id}>  
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
    </div>
  ) 
}

export default Card;
