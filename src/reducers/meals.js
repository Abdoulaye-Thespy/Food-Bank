import {
  GET_INGREDIENTS,
} from '../actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        catergories: action.payload,
      };
    default:
      return state;
  }
}
