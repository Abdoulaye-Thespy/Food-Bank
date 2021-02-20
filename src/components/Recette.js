import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recette = ({ recette }) => (
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
          state: {
            idmeal: recette.idMeal,
          },
        }}
        key={recette.idMeal}
        className="btn btn-info btn-details"
      >
        details
      </Link>
    </div>
  </section>
);

Recette.propTypes = {
  recette: PropTypes.objectOf(PropTypes.any).isRequired,
};
const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Recette);
