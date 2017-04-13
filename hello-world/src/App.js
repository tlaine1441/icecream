import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-left"><a href="#">Somewhere Warm</a></div>
          <div className="nav-right"><a href="#">About</a></div>
        </nav>
        <div className="container">
            <h1>Ready to go <span>somewhere</span> warm?</h1>
            <button className="lets-go-btn">Lets Go!</button>
        </div>
      </div>
    );
  }
}

export default App;
