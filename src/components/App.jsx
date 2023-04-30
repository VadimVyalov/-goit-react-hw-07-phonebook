import React from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Container from './Container';
import Loader from './Loader/Loader';
import { ListTitle } from './ContactList/ContactList.styled';
import { useGetContactsQuery } from 'redux/contactsApi';

export const App = () => {
  const { isLoading, isError: error } = useGetContactsQuery();

  return (
    <Container>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader size={300} />}
      {!isLoading && !error && <ContactList />}
      {error && (
        <>
          <ListTitle>Щось пішло не так</ListTitle>
          <p>{error}</p>
        </>
      )}
    </Container>
  );
};
