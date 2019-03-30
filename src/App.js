import React, { Component } from 'react';
import './App.css';
import Start from './component-start/Start';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Start/>   
      </div>
    )
  }
}

export default App;
