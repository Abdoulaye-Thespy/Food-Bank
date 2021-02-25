import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import shallowWrapper from '../../setupTests';

describe('Navigation bar', () => {
  const nav = shallowWrapper(Navbar);

  test('should render Navbar', () => {
    expect(nav).toBeTruthy();
    expect(nav).not.toBeFalsy();
    expect(nav).toMatchSnapshot();
  });

  test('should have three Links', () => {
    const link = nav.find(Link);
    expect(link).toHaveLength(3);
    expect(link).not.toHaveLength(0);
  });
});
