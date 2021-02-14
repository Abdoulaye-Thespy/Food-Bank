/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categories } from '../categories';

const Recettes = ({ category }) => {
  const [foods, setFoods] = useState([]);

  useEffect(async () => {
    const foodList = [];
    const result = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    Array.prototype.push.apply(foodList, result.data.meals);
    setFoods(foodList);
    console.log(result);
    console.log(foods);
    console.log(category);
  }, []);

  return (
    <>
      <section>

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
                jjjjjjjjjjjjjjjjjjjjj
                oppppppppppppppppppp
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
  category: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  category: state.category,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Recettes);
