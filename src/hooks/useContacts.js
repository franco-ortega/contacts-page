import { useEffect, useState } from 'react';

export const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50&inc=picture,name,email,phone,id')
      .then(res => res.json())
      .then(res => setContacts(res.results));
  }, []);

  return {
    contacts
  };
};
