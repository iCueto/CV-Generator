import React, { Component } from 'react';
import logo from './logo.svg';
import Cover from './components/Cover/Cover'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover>
          <h1>Alexandro Cueto</h1>
        </Cover>
      </div>
    );
  }
}

export default App;
