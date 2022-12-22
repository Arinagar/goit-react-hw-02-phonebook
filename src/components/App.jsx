import { React, Component } from 'react';

import { ContactsList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFindChange = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  addNewContact = newContact => {
    if (this.state.contacts.find(el => el.name === newContact.name)) {
      alert(`${newContact.name} has already exists`);
      return;
    }
    this.setState(prevContacts => {
      return {
        contacts: [...prevContacts.contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const normalize = this.state.filter.toLowerCase().trim();
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().trim().includes(normalize);
    });
    return (
      <>
        <ContactForm addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={this.onFindChange}></input>
        <ContactsList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
