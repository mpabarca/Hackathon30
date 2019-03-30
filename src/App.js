import React, { Component } from 'react';
import './App.css';
import Start from './component-start/Start';
import Login from './component-login/Login';
import Navbar from './component-navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        
      </div>
    )
  }
}

export default App;
