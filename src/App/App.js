import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state={
      reservations: []
    }

  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(data => data.json())
    .then(res => 
      this.setState({
        reservations: res
      }))
    .catch(error => console.log(error))
  }

  addReservation = (newRes) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newRes.name,
        date: newRes.date,
        time: newRes.time,
        number: newRes.number
      })
    })
    this.setState({ reservations: [...this.state.reservations, newRes] });

}

  cancelReservation = (id) => {


    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });      
    const filteredRes = this.state.reservations.filter(reservation =>
      reservation.id !== id);

      this.setState({ reservations: filteredRes })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation} />
        <Container key='' reservations={this.state.reservations} cancelReservation={this.cancelReservation} />
      </div>
    )
  }
}

export default App;
