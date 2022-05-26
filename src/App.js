import React from 'react';
import CardList from './components/cardList/CardList';
import { useContacts } from './hooks/useContacts';

const App = () => {
  const { contacts } = useContacts();

  return (
    <div>
      <CardList contacts={contacts} />
    </div>
  );
};

export default App;
