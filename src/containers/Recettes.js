/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { categories } from '../categories';

const Recettes = () => {
  const [appState, setAppState] = useState({
    loading: 'false',
    foods: null,
    category: 'Beef',
  });

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?c=Beef')
      .then(res => {
        const FoosList = res.data;
        setAppState({
          loading: 'false',
          foods: FoosList,
          category: 'Beef',
        });
      });
    console.log(appState.foods);
  }, []);

  const foodList = appState.foods;

  return (
    <>
      <section>

        <div>
          <h2>Nos Ingredients </h2>
        </div>
        <div>
          <h2>Nos Recettes</h2>
          <h2>{appState.category}</h2>

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
