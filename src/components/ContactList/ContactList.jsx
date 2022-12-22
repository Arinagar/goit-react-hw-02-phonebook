import PropTypes from 'prop-types';

export const ContactsList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(el => {
        return (
          <li key={el.id}>
            {el.name}: {el.number}
            <button type="button" onClick={() => deleteContact(el.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propType = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
