import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recette = ({ recette }) => (
  <h4>
    Recette
    {recette.idMeal}
  </h4>
);

Recette.propTypes = {
  recette: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Recette;
