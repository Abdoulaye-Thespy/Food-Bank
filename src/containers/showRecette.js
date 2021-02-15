import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Recette = ({ IdFood }) => {
  const [recette, setRecette] = useState([]);

  useEffect(async () => {
    const Recette = [];
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdFood}`);
    console.log(result);
    console.log(IdFood);
    Array.prototype.push.apply(Recette, result.data.meals);
    setRecette(Recette);
  }, []);

  return (
    <>
      <section>

        <div>
          <h2>Nos Ingredients </h2>
        </div>
        <div>
          <h2>Nos Recettes</h2>
          <h2>{IdFood}</h2>
          <h2>{recette}</h2>
        </div>

      </section>

    </>
  );
};

Recette.propTypes = {
  IdFood: PropTypes.string.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Recette);
