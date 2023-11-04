import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';


const App = () => {
  const [contacts, setContacts] = useState(getContactsInStorage());
  const [filter, setFilter] = useState('');


  function getContactsInStorage(){
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) return JSON.parse(savedContacts)
    return [];
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const handleAddContact = (newContact) => {

    const isContactExists = contacts.some((contact) => contact.name === newContact.name);

    if (isContactExists) {
      alert(`${newContact.name} вже є у вашій книзі!`);
      return;
    }

    const contactToAdd = {
      ...newContact,
      id: nanoid(),
    };

    setContacts((prevState) =>
      [...prevState, contactToAdd],
    );
  };

  const addFilterContact = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id))
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter contact={filter}
              addFilterContact={addFilterContact} />
      <ContactList onDeleteContact={onDeleteContact}
                   getFilteredContacts={getFilteredContacts()} />
    </>
  );
};

export default App;
