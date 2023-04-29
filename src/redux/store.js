import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { contactsApi } from './rtk';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    //contactsRtk: contactsApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: gDM => gDM().concat(contactsApi.middleware),
});
