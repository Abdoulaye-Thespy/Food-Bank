import { combineReducers } from 'redux';
import meals from './meals';
import Filtering from './filter';

const rootReducer = combineReducers({
  meals,
  Filtering,
});

export default rootReducer;
