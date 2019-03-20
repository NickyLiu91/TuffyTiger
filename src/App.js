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
            <Story />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
