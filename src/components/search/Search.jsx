import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.css';

const Search = ({ contacts, setContactsToDisplay }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setContactsToDisplay(contacts);
    
    if(searchTerm) {
      setContactsToDisplay(prevState => {
        return prevState
          .filter(contact => {
            const name = `${contact.name.first} ${contact.name.last}`.toLowerCase();
            return name.includes(searchTerm);
          });
      });
    }

  }, [searchTerm]);

  return (
    <input className={styles.Search}
      placeholder='search...'
      onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
    />
  );
};

Search.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContactsToDisplay: PropTypes.func.isRequired
};

export default Search;
