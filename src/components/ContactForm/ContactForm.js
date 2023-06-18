import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import css from './contactForm.module.css'

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
const loginInputId = nanoid();

const handleSubmit = e => {
  e.preventDefault();
  onSubmit({ name, number });
  setName('');
  setNumber('');
};

const nameChange = ({ target: { value } }) => {
  setName(value);
  };
  const numberChange = ({ target: { value } }) => {
    setNumber(value);
  };

  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label htmlFor={loginInputId}>
        Name
        <input
        className={css.inputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={nameChange}
          value={name}
        />
      </label>
      <label htmlFor={loginInputId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={numberChange}
          value={number}
        />
      </label>
      <button className={css.buttom}type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};