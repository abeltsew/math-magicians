import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('should render', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
