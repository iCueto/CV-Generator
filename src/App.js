import React, { Component } from 'react';

import avatar from './avatar.jpg';

import Cover from './components/Cover/Cover';

import PictureAvatar from './components/PictureAvatar/PictureAvatar';

import BasicInfo from './components/BasicInfo/BasicInfo';

import ContactMe from './components/ContactMe/ContactMe';
import ContactMeItem from './components/ContactMe/ContactMeItem';

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
          <ContactMe title="Contact Me">
            <ContactMeItem>829 407 2200</ContactMeItem>
            <ContactMeItem>809 614 2200</ContactMeItem>
            <ContactMeItem>C/ Restauracion #95, Rio Salado,La Romana, Rep. Dom.</ContactMeItem>
            <ContactMeItem>cuetodev@gmail.com</ContactMeItem>
          </ContactMe>
        </Cover>
      </div>
    );
  }
}

export default App;
