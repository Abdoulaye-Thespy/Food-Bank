import React from 'react';
import shallow from '../../testSetup';
import Recette from '../../components/Recette';

describe('Recette component', () => {
  const page = shallow(Recette);

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