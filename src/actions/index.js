import axios from 'axios';
import {
  GET_INGREDIENTS,
} from './types';

const getAllIngredients = () => async dispatch => {
  const Ingredients = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  );
  dispatch({
    type: GET_INGREDIENTS,
    payload: Ingredients,
  });
};

export default getAllIngredients;