import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    return (
      <div className="BasicInfo">
        <h1>{ this.props.name }</h1>
        <h2>{ this.props.position }</h2>
        <i>{ this.props.children }</i>
      </div>
    );
  }
}

export default BasicInfo;
