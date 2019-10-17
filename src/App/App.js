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
  }

  addReservation = (newRes) => {
  this.setState({ reservations: [...this.state.reservations, newRes] });
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <Container key='' reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
