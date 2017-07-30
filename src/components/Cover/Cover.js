import React, { Component } from 'react';
import './Cover.css'

class Cover extends Component {
  render() {
    return (
      <div className="Cover">
        { this.props.children }
      </div>
    );
  }
}

export default Cover;
