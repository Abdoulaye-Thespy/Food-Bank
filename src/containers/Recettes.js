/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categories } from '../categories';

const Recettes = () => {
  const [recettes, setrecettes] = useState([]);
  const [Category, setCategory] = useState('Beef');

  useEffect(async () => {
    const fetchFood = ({ Category }) => {
      const { data: { results } } = axios.get('https://www.themealdb.com/api/json/v1/1/search.php?c="Beef"');

      return results;
    };

    try {
      const data = await fetchFood();
      setrecettes(data);
    } catch {
      return null;
    }
  }, []);

  console.log(recettes);
  console.log(categories);

  return (
    <>
      <section>

        <div>
          <h2>Nos Ingredients </h2>
        </div>
        <div>
          <h2>Nos Recettes</h2>
          <ul>
            {recettes.map(recette => (
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
  // GetIngredients: PropTypes.func.isRequired,
  // Ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Recettes);
