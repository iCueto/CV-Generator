import React, { Component } from 'react';

class ContactMe extends Component {
  render() {
    return (
      <div className="ContactMe">
        <h4>{ this.props.title }</h4>
        <div className="container">
          <ul>
            { this.props.children }
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactMe;
