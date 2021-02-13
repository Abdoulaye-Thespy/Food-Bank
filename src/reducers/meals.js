import {
  GET_INGREDIENTS,
} from '../actions/types';

const initialState = {
  catergories: [],
};

export default function (state = initialState, action) {
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
