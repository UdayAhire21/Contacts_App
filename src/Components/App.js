import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router } from 'react-router-dom'; // Remove Switch from import
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
import ContactList from './Contactlist';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts((prevContacts)=>[...prevContacts, {id: uuid(), ...contact}]);
    };

    const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
      setContacts(newContactList);
    };

    useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  console.log("Retrieved from storage:", retrieveContacts);
  if (retrieveContacts && retrieveContacts.length>0) {
    setContacts(retrieveContacts);
  }
}, []);

useEffect(() => {
  console.log("Saving to storage:", contacts);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);


  return (
     <div className="ui container">
      <Router>
        <Header />
       
          {/* REMOVED: <Switch> tag */}
            
             <Routes>
              
            <Route path="/add" Component={AddContact}/>
            {/* Note: The 'exact' prop is no longer needed in v6 */}
            <Route path="/" Component={ContactList}/>
      
            </Routes>
          {/* REMOVED: </Switch> tag */}
       
       
    {/* The old way of using components is commented out below:
    <AddContact addContactHandler={addContactHandler} />
    <ContactList contact={contacts} getContactId={removeContactHandler}/> */}
    
      </Router>
    
  </div>
  );
}
export default App;