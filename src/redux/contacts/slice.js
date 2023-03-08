import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      return {
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { addContact, removeContact } = contactSlice.actions;

// Selectors
export const getContactsData = state => state.contacts.contacts;
