import React, { Component } from 'react';
import avatar from './avatar.jpg';
import Cover from './components/Cover/Cover';
import PictureAvatar from './components/PictureAvatar/PictureAvatar';
import BasicInfo from './components/BasicInfo/BasicInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover>
          <PictureAvatar urlPicture={avatar} />
          <BasicInfo name="Alexandro Cueto" position="Full Stack Developer">
            "Creative, curious by nature, I like to creating new things."
          </BasicInfo>
        </Cover>
      </div>
    );
  }
}

export default App;
