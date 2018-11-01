import React, { Component } from 'react';
import { Navbar, Routes } from './';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
