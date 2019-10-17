import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state ={
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitReservation = (event) => {
    event.preventDefault();
    const newRes = {
      ...this.state
    }
    this.props.addReservation(newRes); 
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  }

  render() {
    return (
      <form className="form">
        <input 
        type="text"
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={event=>this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          onChange={event => this.handleChange(event)}
        />
        <input
          type="number"
          placeholder="Number of guests"
          name="number"
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button
        onClick={event => this.submitReservation(event)}
        >Make Reservation</button>
      </form>
    )
  }
}

export default Form;