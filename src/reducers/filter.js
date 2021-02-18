import { FILTER_BOOK } from '../actions/types';

const Filtering = (state = 'Breakfast', { type, filter }) => {
  console.log(filter);
  switch (type) {
    case FILTER_BOOK:
      return filter;
    default:
      return state;
  }
};

export default Filtering;
