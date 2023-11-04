import { useState } from 'react';



const ContactForm = (props) => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

  const newContact = (e) => {
    'name' === e.target.name? setName(e.target.value): setNumber(e.target.value)
  };

  const addNewContact = (e) => {
    e.preventDefault()
    props.addNewContact({name, number});
    setName('');
    setNumber('');
  };

    return (
      <form onSubmit={addNewContact}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={newContact}
            required
          />
        </label>
        <label>
          Number:
          <input
            type='tel'
            name='number'
            value={number}
            onChange={newContact}
            required
            placeholder='000-00-00'
          />
        </label>
        <button type='submit' >Add contact</button>
      </form>
    );
}

export default ContactForm;
