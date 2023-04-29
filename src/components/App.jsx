import React from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Container from './Container';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import Loader from './Loader/Loader';
import { ListTitle } from './ContactList/ContactList.styled';
import { useGetContactsQuery } from 'redux/rtk';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const { isLoading, isError: error } = useGetContactsQuery();
  //console.log(contacksRtk);
  return (
    <Container>
      <ContactForm />
      <Filter />
      {isLoading && !error && <Loader />}
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
