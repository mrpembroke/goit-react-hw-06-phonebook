import React from 'react';
import s from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import * as actions from '../../redux/actions';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <span className={s.name}>{name}</span>: {phone}
          <button
            className={s.closeBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
