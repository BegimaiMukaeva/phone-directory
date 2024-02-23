import React, { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../store/contactsSlice';
import style from './ContactList.module.css';

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
        <div className={style.container}>
            <table>
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>Кем приходится</th>
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
                                <button className={style.deleteButton} onClick={() => dispatch(deleteContact(contact.id))}>Удалить</button>
                                <button className={style.editButton} onClick={() => handleEdit(contact)}>Редактировать</button>
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
