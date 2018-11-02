import React, { Component } from 'react';
import { Routes } from './';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
