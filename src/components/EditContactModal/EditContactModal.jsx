import React, { useState, useEffect } from 'react';

function EditContactModal({ contact, isOpen, onClose, onSave }) {
  const [editedContact, setEditedContact] = useState({
    name: '',
    phone: '',
    relation: '',
  });

  useEffect(() => {
    if (contact) {
      setEditedContact(contact);
    }
  }, [contact]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
  };

  return (
      <div style={{ position: 'fixed', top: '20%', left: '30%', backgroundColor: 'white', padding: '20px', zIndex: 100 }}>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSave(editedContact);
        }}>
          <input
              type="text"
              name="name"
              value={editedContact.name}
              onChange={handleChange}
              placeholder="Имя"
              required
          />
          <input
              type="text"
              name="phone"
              value={editedContact.phone}
              onChange={handleChange}
              placeholder="Телефон"
              required
          />
          <input
              type="text"
              name="relation"
              value={editedContact.relation}
              onChange={handleChange}
              placeholder="Отношение"
              required
          />
          <button type="submit">Сохранить изменения</button>
          <button type="button" onClick={onClose}>Отмена</button>
        </form>
      </div>
  );
}

export default EditContactModal;
