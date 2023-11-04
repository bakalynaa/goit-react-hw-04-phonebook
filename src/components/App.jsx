import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (newContact) => {
    const { contacts } = this.state;

    // Перевіряємо, чи існує контакт з таким іменем вже в книзі
    const isContactExists = contacts.some((contact) => contact.name === newContact.name);

    if (isContactExists) {
      alert(`${newContact.name} вже є у вашій книзі!`);
      return;
    }

    const contactToAdd = {
      ...newContact,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  addFilterContact = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== id),
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter contact={this.filter}
                addFilterContact={this.addFilterContact} />
        <ContactList onDeleteContact={this.onDeleteContact}
                     getFilteredContacts={this.getFilteredContacts()} />
      </> 
    );
  }

}

export default App;
