import React, { Component } from 'react';

class ContactMeItem extends Component {
  render() {
    return (
      <li>{ this.props.children }</li>
    );
  }
}

export default ContactMeItem;
