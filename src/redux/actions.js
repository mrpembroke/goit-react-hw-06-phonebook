import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('phonebook/add', (name, phone) => ({
  payload: {
    id: shortid.generate(),
    name,
    phone,
  },
}));

export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/changeFilter');
