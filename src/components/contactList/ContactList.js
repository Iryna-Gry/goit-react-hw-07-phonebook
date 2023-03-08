import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, getContactsData } from 'redux/contacts/slice';
import { getFilterValue } from 'redux/filter/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContactsData);

  const normalisedFilter = filter.toLowerCase();
  const filteredContacts = contacts?.filter(item =>
    item.name.toLowerCase().includes(normalisedFilter)
  );

  return (
    <>
      <ul className={css.Contact__list}>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <li
              key={id}
              name={name}
              number={number}
              className={css.Contact__item}
            >
              <p>{name}</p>
              <p>{number}</p>
              <button
                type="button"
                className={css.Btn}
                onClick={() => dispatch(removeContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
