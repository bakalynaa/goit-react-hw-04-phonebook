import { Component } from 'react';


class ContactForm extends Component {

  state = {
    name: '',
    number: '',
  };

  newContact = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewContact = (e) => {
    e.preventDefault()
    this.props.addNewContact(this.state);
    this.setState( {name: '', number: ''});
  };

  render() {

    return (
      <form onSubmit={this.addNewContact}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.newContact}
            required
          />
        </label>
        <label>
          Number:
          <input
            type='tel'
            name='number'
            value={this.state.number}
            onChange={this.newContact}
            required
            placeholder='000-00-00'
          />
        </label>
        <button type='submit' >Add contact</button>
      </form>
    );
  }
}


export default ContactForm;
