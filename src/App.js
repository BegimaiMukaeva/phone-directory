import React, { useState, useEffect } from 'react';
import ContactForm from '../src/components/ContactForm/ContactForm';
import ContactList from '../src/components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    if (editingContact) {
      setContacts(contacts.map(c => c.id === editingContact.id ? { ...contact, id: editingContact.id } : c));
    } else {
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
    setEditingContact(null);
  };

  const startEditingContact = (contact) => {
    setEditingContact(contact);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <ContactForm addContact={addContact} editingContact={editingContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} startEditingContact={startEditingContact} />
    </div>
  );
}

export default App;
