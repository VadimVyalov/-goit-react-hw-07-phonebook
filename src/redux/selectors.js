import { createSelector } from '@reduxjs/toolkit';
import { contactsApi } from './rtk';
export const selectFilter = state => state.filter;
//export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

const inititial = [];

export const selectResult = contactsApi.endpoints.getContacts.select();

export const selectContacts = createSelector(
  selectResult,
  Result => Result?.data ?? inititial
);

export const selectfiltredContact = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
