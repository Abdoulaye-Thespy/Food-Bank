import { FILTER_BOOK } from './types';

const filterBook = filparam => ({
  type: FILTER_BOOK,
  payload: filparam,
});

export default filterBook;
