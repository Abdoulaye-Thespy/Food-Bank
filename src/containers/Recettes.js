import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from '../components/filter';
import filterBook, { getrecette } from '../actions/index';
import Recette from '../components/Recette';
import Loading from '../components/loading';

const Recettes = ({ category, handleFilterChange, showDetails }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const foodList = [];
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    Array.prototype.push.apply(foodList, result.data.meals);
    setFoods(foodList);
    setLoading(false);
  }, [category]);

  const handleFilter = value => {
    handleFilterChange(value);
  };

  const handleDetails = idmeal => {
    showDetails(idmeal);
  };

  return loading === true ? (
    <Loading />
  ) : (
    <>
      <section>

        <CategoryFilter handleChange={handleFilter} />

        <h2 className="">
          Category:
          {category}
        </h2>
        <div className="recettes">
          {foods.map(recette => (
          /* eslint-disable no-debugger, max-len */
            <Recette key={recette.idMeal} recette={recette} details={handleDetails} id={recette.idMeal} />
          ))}
        </div>

      </section>

    </>
  );
};

Recettes.propTypes = {
  category: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.Filtering,
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: param => dispatch(filterBook(param)),
  showDetails: param => dispatch(getrecette(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recettes);
