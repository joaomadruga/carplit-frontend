import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';
import StartScreen from '../src/views/start';
import * as Store from '../src/redux/store/store'

test('renders correctly', () => {
  const isLogin = false;
  const Start = create(
  <Store.LoginContext.Provider value={{ isLogin }}>  
    <StartScreen />
  </Store.LoginContext.Provider>).toJSON();
  expect(Start).toMatchSnapshot();
});

it('login button title', () => {
  const title = 'Entrar';
  const isLogin = false;
  const {getByText} = render(
  <Store.LoginContext.Provider value={{ isLogin }}>  
    <StartScreen />
  </Store.LoginContext.Provider>).toJSON();
  const foundButtonTitle = screen.getByText(title);
  expect(foundButtonTitle.props.children).toEqual(title);
});

it('create account button title', () => {
  const title = 'Criar uma conta';
  const isLogin = false;
  const {getByText} = render(
  <Store.LoginContext.Provider value={{ isLogin }}>  
    <StartScreen />
  </Store.LoginContext.Provider>).toJSON();
  const foundButtonTitle = screen.getByText(title);
  expect(foundButtonTitle.props.children).toEqual(title);
});
