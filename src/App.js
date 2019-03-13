import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Story from './containers/Story'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="background">
          <header className="App-header">
            <img src="images/Tuffy1.png" className="App-logo" alt="logo" />
            <p>
            Tuffy and Friends!
            </p>
            <Story />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
