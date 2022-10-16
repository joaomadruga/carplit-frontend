import React from 'react';
import renderer from 'react-test-renderer';
import StartScreen from '../src/views/start';

test('renders correctly', () => {
  const Start = renderer.create(<StartScreen />).toJSON();
  expect(Start).toMatchSnapshot();
});