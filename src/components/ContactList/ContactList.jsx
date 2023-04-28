import {
  ContactListContainer,
  ContactItem,
  ListTitle,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectfiltredContact } from 'redux/selectors';

const ContactList = () => {
  const handleDelete = id => dispatch(deleteContact(id));
  const dispatch = useDispatch();

  const filtredContacts = useSelector(selectfiltredContact);

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
