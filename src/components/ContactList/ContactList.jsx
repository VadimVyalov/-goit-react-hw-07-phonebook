import {
  ContactListContainer,
  ContactItem,
  ListTitle,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectfiltredContact } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/rtk';

const ContactList = () => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  // const filtredContacts = useSelector(selectfiltredContact);

  const { data: filtredContacts } = useGetContactsQuery();
  return filtredContacts.length ? (
    <ContactListContainer>
      <ListTitle>Контакти</ListTitle>
      <ul>
        {filtredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}:{' '}
            <span>
              {number}
              <button type="button" onClick={() => handleDelete(id)}>
                delete
              </button>
            </span>
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  ) : (
    <ListTitle>Контактів нема</ListTitle>
  );
};

export default ContactList;
