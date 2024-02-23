import React, { useState } from 'react';
import AddContactModal from '../AddContactModal/AddContactModal';
import style from './ContactForm.module.css';

function ContactForm({ editingContact }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className={style.container}>
            <h2 className={style.containerTitle}>Телефонный справочник</h2>
            <button onClick={handleOpenModal} className={style.submitButton} type="button">+ Добавить контакт</button>
            {isModalOpen && <AddContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default ContactForm;
