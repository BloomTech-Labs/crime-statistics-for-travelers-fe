import renderer from 'react-test-renderer';

import App from './App';


describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('My Test Suite', () => {
    it('My Test Case', () => {
      expect(true).toEqual(true);
    });
  });

