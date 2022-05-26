import React from 'react';
import { useContacts } from './hooks/useContacts';

const App = () => {
  const { contacts } = useContacts();
  console.log(contacts);

  return (
    <div>App</div>
  );
};

export default App;
