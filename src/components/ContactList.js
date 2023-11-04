


const ContactList = ({ onDeleteContact, getFilteredContacts }) => {
  return (
    <ul>
      {getFilteredContacts.map(el => {
        return (
          <li key={el.id}>
            <p>{el.name}: {el.number}</p>
            <button
              type="button"
              onClick={() => {onDeleteContact(el.id);}}
            >Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
