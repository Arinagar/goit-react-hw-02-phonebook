import { React, Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = event => {
    // const data = new FormData(event.target);
    // console.log([...data.entries()]);
    // console.log([...data]);
    event.preventDefault();
    this.setState(prevContacts => {
      return {
        contacts: [...prevContacts.contacts, event],
      };
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitForm}>
          <h2>Name</h2>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, A"
              value={this.state.name}
              required
              onChange={this.onInputChange}
            />
          </label>
          <label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(el => {
            console.log(el);
            return (
              <li key={nanoid(10)}>
                {el.name} {el.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
