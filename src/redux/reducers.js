import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const initialContactlist = [
  { id: 'id-1', name: 'John Piters', phone: '555-55-55' },
  { id: 'id-2', name: 'Piter Johnson', phone: '444-44-44' },
  { id: 'id-3', name: 'Pit Ivans', phone: '333-33-33' },
  { id: 'id-4', name: 'Ivan Piterson', phone: '222-22-22' },
];

const items = createReducer(initialContactlist, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
