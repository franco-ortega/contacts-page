import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import Loading from '../loading/Loading';
import styles from './CardList.module.css';

const CardList = ({ contacts }) => {
  console.log(contacts);

  const cardList = contacts.map(contact => (
    <Card
      key={contact.id.value || contact.phone}
      avatar={contact.picture.thumbnail}
      name={contact.name.first + ' ' + contact.name.last}
      email={contact.email}
      phone={contact.phone}
    />
  ));

  if(contacts.length === 0) return <Loading />;

  return (
    <div className={styles.CardList}>{cardList}</div>
  );
};

CardList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default CardList;
