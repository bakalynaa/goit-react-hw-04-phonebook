import React from 'react';

const Filter = ({ contact, addFilterContact }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      value={contact}
      onChange={addFilterContact}
    />
  </label>
);

export default Filter;
