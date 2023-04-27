import {
  ContactListContainer,
  ContactItem,
  ListTitle,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { deleteContact, getContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtredContacts = Array.isArray(contacts)
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    : [];

  return filtredContacts.length ? (
    <ContactListContainer>
      <ListTitle>Контакти</ListTitle>
      <ul>
        {filtredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: <span>{number}</span>
            <button type="button" onClick={() => handleDelete(id)}>
              delete
            </button>
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  ) : (
    <ListTitle>Контактів нема</ListTitle>
  );
};

export default ContactList;
