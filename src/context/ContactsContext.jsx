import { createContext } from "react";

const ContactsContext = createContext({
    
    contacts: [],
    selectedContact: null,
    setContacts: () => {}, 
    setSelectedContact: () => {}
})

export default ContactsContext;