import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recette = ({ recette, details }) => (
  <section>
    <div className="img-container">
      <img src={recette.strMealThumb} alt={recette.strMeal} />
    </div>
    <div className="meal-footer">
      <h2>{recette.strMeal}</h2>
      <h3>{recette.strCategory}</h3>

      <Link
        to={{ pathname: `/recete/${recette.idMeal}` }}
        key={recette.idMeal}
        className="btn btn-info btn-details"
        onclick={details(recette.idMeal)}
      >
        details
      </Link>
    </div>
  </section>
);

Recette.propTypes = {
  details: PropTypes.func.isRequired,
  recette: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Recette;
