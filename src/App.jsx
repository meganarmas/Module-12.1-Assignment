import { useState } from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import ContactContext from './context/ContactsContext';
import ContactList from './components/ContactList';
import ProductList from './components/ProductList';
import NewProductForm from './components/NewProductForm';

function App() {
  const [contacts, setContacts ] = useState([    
    { name: "Fox Mulder", email: "iwant2believe@gmail.com", phone: "111-222-4444"},
    { name: "Dana Scully", email: "dkscully@gmail.com", phone: "111-222-333" }
  ])


  
  const [selectedContact, setSelectedContact] = useState(null)

  return (
    <ContactContext.Provider value={{contacts, setContacts, selectedContact, setSelectedContact}}>
      <ContactList/>
        <ProductList />
        <NewProductForm />
    </ContactContext.Provider>
  )
}

export default App