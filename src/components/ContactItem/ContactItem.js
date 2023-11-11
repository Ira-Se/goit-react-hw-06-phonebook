import { useDispatch, useSelector } from 'react-redux';
import { Item, StyledButton } from './ContactItem.styled';
import { deleteContact } from 'redux/contactsReducer';

export const ContactItem = () => {
  const contacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(filterContacts);
  return (
    <>
      {filterContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <StyledButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </StyledButton>
        </Item>
      ))}
    </>
  );
};
