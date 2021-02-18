import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from '../components/filter';
import filterBook from '../actions/index';
import Recette from '../components/Recette';

const Recettes = ({ category, handleFilterChange }) => {
  const [foods, setFoods] = useState([]);

  useEffect(async () => {
    const foodList = [];
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    Array.prototype.push.apply(foodList, result.data.meals);
    setFoods(foodList);
  }, [category]);

  const handleFilter = value => {
    handleFilterChange(value);
  };

  return (
    <>
      <section>

        <CategoryFilter handleChange={handleFilter} />

        <div>
          <h2>Nos Ingredients </h2>
        </div>
        <div>
          <h2>Nos Recettes</h2>
          <h2>{category}</h2>
          {foods.map(recette => (
            <Recette key={recette.idMeal} recette={recette} />
          ))}
        </div>

      </section>

    </>
  );
};

Recettes.propTypes = {
  category: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.Filtering,
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: param => dispatch(filterBook(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recettes);
