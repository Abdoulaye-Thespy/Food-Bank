import { FILTER_BOOK } from './types';

const filterBook = filter => ({
  type: FILTER_BOOK,
  filter,
});

export default filterBook;
