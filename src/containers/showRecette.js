import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../components/loading';

const RecetteDetails = ({ idMeal, match }) => {
  const [menu, setMenu] = useState([]);
  const [Uloading, setUloading] = useState(true);
  useEffect(async () => {
    const { id } = match.params;
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(idMeal);
    const Recette = result.data.meals;
    setMenu(Recette[0]);
    setUloading(false);
  }, []);

  return Uloading === true ? (
    <Loading />
  ) : (
    <>
      <section>

        <div>
          <h2>Nos Ingredients </h2>
        </div>
        <div>
          <h2>Nos Recettes</h2>
          <div className="container">
            <h1 className="mb-4 text-center">{menu.strMeal}</h1>
            <div className="row">
              <div className="col-md-6 card card-body">
                <img src={menu.strMealThumb} alt="" />
              </div>

              <div className="col-md-6 ">
                <h2>Ingredients</h2>
                <ul className="ingredients">
                  <li className="item">
                    {menu.strIngredient1}
                    {' '}
                    :
                    {menu.strMeasure1}
                  </li>
                  <li className="item">
                    {menu.strIngredient2}
                    {' '}
                    :
                    {menu.strMeasure2}
                  </li>
                  <li className="item">
                    {menu.strIngredient3}
                    {' '}
                    :
                    {menu.strMeasure3}
                  </li>
                  <li className="item">
                    {menu.strIngredient4}
                    {' '}
                    :
                    {menu.strMeasure4}
                  </li>
                  <li className="item">
                    {menu.strIngredient5}
                    {' '}
                    :
                    {menu.strMeasure5}
                  </li>
                  <li className="item">
                    {menu.strIngredient6}
                    {' '}
                    :
                    {menu.strMeasure6}
                  </li>
                  <li className="item">
                    {menu.strIngredient7}
                    {' '}
                    :
                    {menu.strMeasure7}
                  </li>
                  <li className="item">
                    {menu.strIngredient8}
                    {' '}
                    :
                    {menu.strMeasure8}
                  </li>
                  <li className="item">
                    {menu.strIngredient9}
                    {' '}
                    :
                    {menu.strMeasure9}
                  </li>
                </ul>
                <h2 className="instructions">Instructions</h2>
                <p className="instruction text-justify">{menu.strInstructions}</p>
              </div>
            </div>
            <Link to="/" className="text-center">
              <button type="button" className="btn btn-info btn-details">
                Back to Menu
              </button>
            </Link>
          </div>

        </div>

      </section>

    </>
  );
};

RecetteDetails.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  idMeal: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  idMeal: state.recette,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RecetteDetails);
