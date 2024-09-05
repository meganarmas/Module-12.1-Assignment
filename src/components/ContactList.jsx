import React, { useContext } from "react";
import ContactsContext from "../context/ContactsContext";

const ContactList = () => {
    const { contacts, selectedContact, setSelectedContact } = useContext(ContactsContext);

    const handleClick = (contact) => {
        setSelectedContact(selectedContact === contact ? null : contact);
    };

    return (
        <div>
            <h3>Contact List:</h3>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index} onClick={() => handleClick(contact)}>
                        {contact.name} {selectedContact === contact && `- ${contact.email}, ${contact.phone}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList