import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ avatar, name, email, phone }) => {
  return (
    <div>
      <img src={avatar} alt={`Thumbnail photo of ${name}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Card;
