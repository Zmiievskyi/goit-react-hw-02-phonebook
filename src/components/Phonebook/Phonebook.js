import React, { Component } from 'react';
import { Box, Button, Label } from 'components/Common/Common.styled';

export default class Phonebook extends Component {
  state = {
    name: '',
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
    this.setState({name: '', number: ''})
    evt.currentTarget.reset();
  };

  render() {
    const { name, number: phone } = this.state;
    return (
      <Box
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
        border="1px solid"
      >
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <Label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <input
              type="tel"
              name="number"
              value={phone}
              onChange={this.handleInputNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </form>
      </Box>
    );
  }
}

/*
export default function Phonebook({value, number, contact, name ,phone}) {
  function handleInputName (evt)  {
    value(evt.target.value);
  };

  function handleInputNumber (evt) {
    number(evt.target.value);
  };

  function handleSubmit (evt) {
    evt.preventDefault();

    contact(evt.target.value);
    evt.currentTarget.reset();
  };

  
    return (
      <Box display="flex" alignItems="flex-start" flexDirection="column">
        <form onSubmit={handleSubmit}>
          <Label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <input
              type="tel"
              name="number"
              value={phone}
              onChange={handleInputNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </form>
      </Box>
    );
  }
*/
