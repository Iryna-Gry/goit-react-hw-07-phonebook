import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsData } from 'redux/contacts/slice';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(getContactsData);

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    } else if (contacts.some(item => item.phone === number)) {
      alert(`${number} is already in contacts`);
      return;
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          phone: number,
          createdAt: Date.now(),
        })
      );
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={css.Form} onSubmit={handleSubmit}>
      <label className={css.Form__label}>
        Name
        <input
          className={css.Form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
        />
      </label>
      <label className={css.Form__label}>
        Number
        <input
          className={css.Form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={number}
        />
      </label>
      {error && 'Oops something went wrong'}
      <button type="submit" disabled={isLoading} className={css.Form__Btn}>
        Add Contact
      </button>
    </form>
  );
};
