import React, { Component } from 'react';
import './App.css';
import Start from './component-start/Start';
import Login from './component-login/Login';
import Navbar from './component-navbar/Navbar';
import Desafios from './component-desafios/Desafios';
import { Link } from 'react-router-dom';
import Premios from './component-premios/Premios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Premios/>        
      </div>
    )
  }
}

export default App;
