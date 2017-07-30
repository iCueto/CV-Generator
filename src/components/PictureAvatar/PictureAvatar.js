import React, { Component } from 'react';
import './PictureAvatar.css'

class PictureAvatar extends Component {
  render() {
    return (
      <div className="PictureAvatar">
        <img className="Avatar" src={ this.props.urlPicture } />
      </div>
    );
  }
}

export default PictureAvatar;
