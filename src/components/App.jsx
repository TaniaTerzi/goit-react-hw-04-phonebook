// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./filterContact/filterContact";
import css from './App.module.css'

const contactsOptions = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Klements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

export  const App = () => {
  const [contacts, setContacts] = useState(() =>
  JSON.parse(window.localStorage.getItem('contacts'))
  ?? contactsOptions);
  //  const [contacts, setContacts] = useState(contactsOptions);
  const [filter, setFilter] = useState('');

useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

 const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return false;
    }

    setContacts (
       [newContact, ...contacts],
    );
    return true;
  };

  const filterChanger = e => {
    setFilter(e.currentTarget.value);
  };
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
    };
    
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.conteiner}>
        <h1 >Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} filterChanger={filterChanger} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={deleteContact}
        />
      </div>
    );
  };