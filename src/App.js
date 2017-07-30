import React, { Component } from 'react';
import avatar from './avatar.jpg';
import Cover from './components/Cover/Cover';
import PictureAvatar from './components/PictureAvatar/PictureAvatar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover>
          <PictureAvatar urlPicture={avatar} />
          <h1>Alexandro Cueto</h1>
        </Cover>
      </div>
    );
  }
}

export default App;
