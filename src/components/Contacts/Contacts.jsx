import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/ContactsRedux/contacts.operatons';
import { contactItems, filterItems } from 'redux/ContactsRedux/contactsSelector';

import css from './Contacts.module.css';

const Contacts = () => {
  const filterState = useSelector(filterItems);
  const contacts = useSelector(contactItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filterContacts = (contacts, filterState) => {
    return filterState
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterState.toLowerCase())
        )
      : contacts;
  };

  const filteredContacts = filterContacts(contacts, filterState);
  // console.log(filteredContacts);
  // 
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {filteredContacts?.map(({ name, id, number }) => {
          // console.log(name);
          return (
            <li key={id} className={css.item}>
              <p className={css.text}>
                {name}: <span>{number}</span>
              </p>
              <button
                className={css.btn}
                onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};



export default Contacts;
