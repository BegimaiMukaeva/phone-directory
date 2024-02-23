import React, { useState, useEffect } from 'react';
import style from './EditContactModal.module.css';

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
        <div className={style.modalBackdrop}>
            <div className={style.modal}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSave(editedContact);
                }} className={style.modalForm}>
                    <input
                        type="text"
                        name="name"
                        value={editedContact.name}
                        onChange={handleChange}
                        placeholder="Имя"
                        required
                        className={style.modalInput}
                    />
                    <input
                        type="text"
                        name="phone"
                        value={editedContact.phone}
                        onChange={handleChange}
                        placeholder="Телефон"
                        required
                        className={style.modalInput}
                    />
                    <input
                        type="text"
                        name="relation"
                        value={editedContact.relation}
                        onChange={handleChange}
                        placeholder="Отношение"
                        required
                        className={style.modalInput}
                    />
                    <button type="submit" className={style.modalButton}>Сохранить изменения</button>
                    <button type="button" onClick={onClose} className={`${style.modalButton} ${style.cancel}`}>Отмена</button>
                </form>
            </div>
        </div>
    );
}

export default EditContactModal;
