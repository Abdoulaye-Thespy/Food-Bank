import filterBook, { getrecette } from '../../actions';
import { GET_RECETTE, FILTER_BOOK } from '../../actions/types';

describe('filterBook action', () => {
  test('should generate a filter action', () => {
    const filter = 'Beef';
    const actionObj = filterBook(filter);

    expect(actionObj).toEqual({
      type: FILTER_BOOK,
      filter,
    });
    expect(actionObj).not.toEqual({});
  });
});

describe('Get recette Action', () => {
  test('should create action for genres', () => {
    const idmeal = 123;
    const foodObj = getrecette(idmeal);

    expect(foodObj).toEqual({
      type: GET_RECETTE,
      idmeal,
    });
    expect(foodObj).not.toEqual([]);
  });
});
