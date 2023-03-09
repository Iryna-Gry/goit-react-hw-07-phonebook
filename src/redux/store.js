import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/slice';
import { contactSlice } from './contacts/slice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
