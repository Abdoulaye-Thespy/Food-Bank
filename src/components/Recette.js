import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recette = ({ recette, details, id }) => (
  <section>
    <div className="img-container">
      <img src={recette.strMealThumb} alt={recette.strMeal} />
    </div>
    <div className="meal-footer">
      <h2>{recette.strMeal}</h2>
      <h3>{recette.strCategory}</h3>

      <Link
        to={{
          pathname: `/showRecette/${recette.idMeal}`,
        }}
        key={recette.idMeal}
        className="btn btn-info btn-details"
      >
        <button type="button" className="btn btn-info btn-details" onClick={details(id)}>
          Details
        </button>
      </Link>
    </div>
  </section>
);

Recette.propTypes = {
  recette: PropTypes.objectOf(PropTypes.any).isRequired,
  details: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Recette);
