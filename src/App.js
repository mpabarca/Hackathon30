import React, { Component } from 'react';
import './App.css';
import Start from './component-start/Start';
import Login from './component-login/Login';
import Navbar from './component-navbar/Navbar';
import Desafios from './component-desafios/Desafios';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4><Link to="/todo">Tareas</Link></h4>
      </div>
    )
  }
}

export default App;
