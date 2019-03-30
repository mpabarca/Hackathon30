import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h4><Link to="/todo">Tareas</Link></h4>
      </div>
    );
  }
}

export default App;
