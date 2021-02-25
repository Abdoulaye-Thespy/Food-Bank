import { FILTER_BOOK } from '../../actions/types';
import Filtering from '../../reducers/filter';

describe('filter reducer', () => {
  test('Should return the default state', () => {
    const state = Filtering(undefined, {});

    expect(state).toEqual('Breakfast');
  });

  test('Should return the new state with appropriate type', () => {
    const filter = 'Seafood';
    const state = Filtering('Breakfast', { type: FILTER_BOOK, filter });

    expect(state).not.toEqual({});
    expect(state).toEqual('Seafood');
  });
});
