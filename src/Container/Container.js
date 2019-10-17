import React from 'react';
import Card from '../Card/Card';
import './Container.css';

const Container = ({ reservations }) => {
console.log(reservations)

  const resCards = reservations.map(reservation => {
    return (
      <Card
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={reservation.id}
      />    
    )
  })

  return (
    <div className="res-container">    
      {resCards}
    </div>
    )
}

export default Container;