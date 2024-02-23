import React, { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../store/contactsSlice';

function ContactList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingContact, setEditingContact] = useState(null);

    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const handleEdit = (contact) => {
        setEditingContact(contact);
        setIsModalOpen(true);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Телефон</th>
                        <th>Отношение</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.relation}</td>
                            <td>
                                <button onClick={() => dispatch(deleteContact(contact.id))}>Удалить</button>
                                <button onClick={() => handleEdit(contact)}>Редактировать</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && <EditContactModal
                contact={editingContact}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={(editedContact) => {
                    dispatch(updateContact(editedContact));
                    setIsModalOpen(false);
                }}
            />}
        </div>
    );
}

export default ContactList;
