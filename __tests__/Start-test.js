import React from 'react';
import renderer from 'react-test-renderer';
import StartScreen from '../src/views/start';

test('renders correctly', () => {
  const tree = renderer.create(<StartScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});