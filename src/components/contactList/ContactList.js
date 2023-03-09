import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsData } from 'redux/contacts/slice';
import { removeContact, fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components';
import { getFilterValue } from 'redux/filter/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const { contacts, isLoading, error } = useSelector(getContactsData);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalisedFilter = filter.toLowerCase();
  const filteredContacts = contacts?.filter(item =>
    item.name.toLowerCase().includes(normalisedFilter)
  );

  return (
    <>
      {isLoading && <Loader />}
      {error && 'Oops, something went wrong'}
      {contacts.length > 0 && !isLoading && !error && (
        <>
          <ul className={css.Contact__list}>
            {filteredContacts.map(({ name, phone, id }) => {
              return (
                <li
                  key={id}
                  name={name}
                  number={phone}
                  className={css.Contact__item}
                >
                  <p>{name}</p>
                  <p>{phone}</p>
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
      )}
    </>
  );
};
