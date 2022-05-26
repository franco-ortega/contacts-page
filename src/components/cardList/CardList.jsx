import React from 'react';
import Card from '../card/Card';
import Loading from '../loading/Loading';
import NoResults from '../noResults/NoResults';
import PropTypes from 'prop-types';
import styles from './CardList.module.css';

const CardList = ({ contacts, contactsToDisplay }) => {

  const cardList = contactsToDisplay.map(contact => (
    <Card
      key={contact.id.value || contact.phone}
      avatar={contact.picture.thumbnail}
      name={`${contact.name.first} ${contact.name.last}`}
      email={contact.email}
      phone={contact.phone}
    />
  ));

  return (
    <div className={styles.CardList}>
      {
        contacts.length === 0 ? <Loading />
          : contacts.length > 0 && contactsToDisplay.length === 0
            ? <NoResults />
            : cardList
      }
    </div>
  );
};

CardList.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactsToDisplay: PropTypes.array.isRequired
};

export default CardList;
