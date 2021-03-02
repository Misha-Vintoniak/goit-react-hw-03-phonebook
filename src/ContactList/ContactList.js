import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.item}>
      {name} : {number}
      <button className={s.button} onClick={() => onRemove(id)}>
        Delete
      </button>
    </li>
  );
};
const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;

  return (
    <>
      <h2> Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <ContactListItem {...contact} onRemove={onRemove} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};
