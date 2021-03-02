import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter find contact"
    />
  );
};
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
