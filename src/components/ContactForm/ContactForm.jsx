import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../../store/contactsSlice';
import style from './ContactForm.module.css';

function ContactForm({ editingContact }) {
    const [contact, setContact] = useState(editingContact || { name: '', phone: '', relation: '' });
    const dispatch = useDispatch();

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
    };

    return (
        <div className={style.container}>
            <h2 className={style.containerTitle}>Телефонный справочник</h2>
            <form onSubmit={handleSubmit} className={style.containerForm}>
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
                <button className={style.submitButton} type="submit">+ Добавить контакт</button>
            </form>
        </div>

    );
}

export default ContactForm;
