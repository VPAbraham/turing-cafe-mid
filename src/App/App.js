import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state={}


  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
        
        </div>
      </div>
    )
  }
}

export default App;
