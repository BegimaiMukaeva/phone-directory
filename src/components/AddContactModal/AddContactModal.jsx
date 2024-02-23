import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../../store/contactsSlice';
import style from './AddContactModal.module.css';

function AddContactModal({ isOpen, onClose , editingContact }) {
    const [contact, setContact] = useState(editingContact || { name: '', phone: '', relation: '' });
    const dispatch = useDispatch();
    if (!isOpen) return null;

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.id) {
            dispatch(updateContact(contact));
        } else {
            dispatch(addContact({...contact, id: Date.now()}));
        }
        setContact({ name: '', phone: '', relation: '' });
        onClose();
    };

    return (
        <div className={style.modalBackdrop}>
            <div className={style.modal}>
                <h2 className={style.containerTitle}>Добавить новый</h2>
                <form onSubmit={handleSubmit} className={style.modalForm}>
                    <input
                        type="text"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        placeholder="Имя"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        placeholder="Телефон"
                        required
                    />
                    <input
                        type="text"
                        name="relation"
                        value={contact.relation}
                        onChange={handleChange}
                        placeholder="Отношение"
                        required
                    />
                    <button className={style.modalButton} type="submit">+ Добавить контакт</button>
                    <button type="button" onClick={onClose} className={`${style.modalButton} ${style.cancel}`}>Отмена</button>
                </form>
            </div>
        </div>

    );
}

export default AddContactModal;
