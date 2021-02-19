import { GET_RECETTE } from '../actions/types';

export default function (state = 0, { type, idmeal }) {
  switch (type) {
    case GET_RECETTE:
      return {
        idmeal,
      };
    default:
      return state;
  }
}
