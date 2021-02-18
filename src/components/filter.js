import React from 'react';
import PropTypes from 'prop-types';
import Categories from '../constants/commun';

function CategoryFilter({ handleChange }) {
  return (
    <div>
      <span>
        <h4>Choose Category</h4>
      </span>
      <select
        onChange={e => {
          handleChange(e.target.value);
        }}
      >
        <option value="Seafood">Seafood</option>
        {Categories.map(e => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default CategoryFilter;
