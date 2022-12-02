import React, { Component } from 'react';
import { GlobalStyle, Section } from 'components/Common';
import { nanoid } from 'nanoid';
import Phonebook from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: [],
  };

  handleContactsList = contact => {
    const checkSimilar = this.state.contacts.some(
      item => item.name === contact.name
    );
    if (!checkSimilar) {
      const contactId = nanoid();
      const newContact = {
        id: contactId,
        name: contact.name,
        number: contact.number,
      };
      this.setState(prevState => {
        return {
          contacts: [newContact, ...prevState.contacts],
        };
      });
    } else {
      return alert(`${contact.name} is already in contacts`);
    }
  };

  handleFilter = evt => {
    const searchName = evt.target.value;
    let filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchName)
    );
    this.setState({ filter: filtredContacts });
  };

  handleRemove = id => {
    const newState = this.state.contacts.filter(item => item.id !== id);
    this.setState({
      contacts: newState,
      filter: [...newState],
    });
  };

  

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.handleContactsList} />
        </Section>
        <Section title="Contacts">
          <Contacts
            list={this.state.filter}
            onFilter={this.handleFilter}
            onRemove={this.handleRemove}
            filterInput={this.filterInput}
          />
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
