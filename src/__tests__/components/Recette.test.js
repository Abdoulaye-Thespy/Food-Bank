import React from 'react';
import '../../setupTests';
import shallowWrapper from '../../setupTests';
import Recette from '../../components/Recette';

describe('Recette component', () => {
  
  const recetteTrial = {
    recette: {
      idMeal: '52895',
      strMeal: 'English Breakfast',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
    },
    details: jest.fn(),
    id: '1',
  };
    const page = shallowWrapper(Recette, recetteTrial);

  test('should render page', () => {
    expect(page).toBeTruthy();
    expect(page).not.toBeFalsy();
    expect(page).toMatchSnapshot();
  });

  test('should have a link to detail page', () => {
    const LinkToDetailPage = page.find('.btn btn-info btn-details');

    expect(LinkToDetailPage).toHaveLength(1);
    expect(LinkToDetailPage).not.toHaveLength(0);
    expect(LinkToDetailPage.text()).toEqual('Details');
    expect(LinkToDetailPage.text()).not.toEqual('');
  });
});