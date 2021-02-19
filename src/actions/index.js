import {GET_RECETTE, FILTER_BOOK } from './types';

const filterBook = filter => ({
  type: FILTER_BOOK,
  filter,
});

const getrecette = idmeal => ({
  type: GET_RECETTE,
  idmeal,
});



export default filterBook;
