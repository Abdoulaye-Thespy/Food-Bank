/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from '../components/filter';

const Recettes = () => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState('Breakfast');

  useEffect(async () => {
    const foodList = [];
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    Array.prototype.push.apply(foodList, result.data.meals);
    setFoods(foodList);
    console.log(result);
    console.log(foods);
    console.log(category);
  }, [category]);

  const handleFilterChange = value => {
    setCategory(value);
  };

  return (
    <>
      <section>

        <CategoryFilter handleChange={handleFilterChange} />

        <div>
          <h2>Nos Ingredients </h2>
        </div>
        <div>
          <h2>Nos Recettes</h2>
          <h2>{category}</h2>
          <ul>
            {foods.map(recette => (
              <li key={recette.idMeal}>
                {recette.strMeal}
                <img src={recette.strMealThumb} alt="" />
              </li>
            ))}
          </ul>
        </div>

      </section>

    </>
  );
};

Recettes.propTypes = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Recettes);
