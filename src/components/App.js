import React, { Component } from 'react';
import { Routes, Navbar } from './';
import '../App.css';

class App extends Component {
	
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='App-body'>
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
