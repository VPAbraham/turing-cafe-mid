import React from 'react';
import Card from '../Card/Card';
import './Container.css';

const Container = ({ reservations, cancelReservation }) => {
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
        cancelReservation={cancelReservation}
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