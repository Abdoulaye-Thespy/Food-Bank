import { combineReducers } from 'redux';
import recette from './recette';
import Filtering from './filter';

const rootReducer = combineReducers({
  recette,
  Filtering,
});

export default rootReducer;
