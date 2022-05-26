import React, { useEffect, useState } from 'react';
import { useContacts } from './hooks/useContacts';
import CardList from './components/cardList/CardList';
import Search from './components/search/Search';

const App = () => {
  const { contacts } = useContacts();
  const [contactsToDisplay, setContactsToDisplay] = useState([]);

  useEffect(() => setContactsToDisplay(contacts), [contacts]);

  return (
    <div>
      <Search contacts={contacts} setContactsToDisplay={setContactsToDisplay} />
      <CardList contacts={contactsToDisplay} />
    </div>
  );
};

export default App;
