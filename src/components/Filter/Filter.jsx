import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const filterId = nanoid();
export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" name={value} onChange={onChange} id={filterId} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
