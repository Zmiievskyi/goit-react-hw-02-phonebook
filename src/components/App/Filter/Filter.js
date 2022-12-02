import React, { Component } from 'react';
import { Box, Button, Label } from 'components/Common/Common.styled';

export default class Phonebook extends Component {
  state = {
      : '',
    number: '',
  };

  handleInputName = evt => {
    this.setState({ name: evt.target.value });
  };

  handleInputNumber = evt => {
    this.setState({ number: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.setState({ name: '', number: '' });
    evt.currentTarget.reset();
  };

  render() {
   
    return ();
  }
}
