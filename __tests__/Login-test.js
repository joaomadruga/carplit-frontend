import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { create, act } from 'react-test-renderer';
import LoginScreen from '../src/views/login';
import * as Store from '../src/redux/store/store';

const isLogin = false;
const loginInfo = "pedro@gmail.com";
const password = "12345678";

test('renders login correctly', () => {
    const telaentrada = create(
    <Store.LoginContext.Provider value={{ loginInfo, password, isLogin }}>  
        <LoginScreen />
    </Store.LoginContext.Provider>).toJSON();
    expect(telaentrada).toMatchSnapshot();
    });

it('login entrance button title', () => {
    const title = 'Entrar';
    const loginbutton = render(
    <Store.LoginContext.Provider value={{ loginInfo, password, isLogin }}>  
        <LoginScreen />
    </Store.LoginContext.Provider>).toJSON();
    const foundButtonTitle = screen.getByText(title);
    expect(foundButtonTitle.props.children).toEqual(title);
});
      
it('forgot password text', () => {
    const title = 'Esqueci minha senha';
    const forgetpasstext = render(
    <Store.LoginContext.Provider value={{ loginInfo, password, isLogin }}>  
        <LoginScreen />
    </Store.LoginContext.Provider>).toJSON();
    const foundButtonTitle = screen.getByText(title);
    expect(foundButtonTitle.props.children).toEqual(title);
});

it('render default elements', () => {
    const entrance = render(
    <Store.LoginContext.Provider value={{ loginInfo, password, isLogin }}>  
        <LoginScreen />
    </Store.LoginContext.Provider>).toJSON();
    const qtd = screen.getAllByText('Entrar').length;
    expect(qtd).toBe(1);
});

it('render default elements', () => {
    const entrance = render(
    <Store.LoginContext.Provider value={{ loginInfo, password, isLogin }}>  
        <LoginScreen />
    </Store.LoginContext.Provider>).toJSON();
    const qtd = screen.getAllByText('Esqueci minha senha').length;
    expect(qtd).toBe(1);
});

it('login testing placeholder', () => {
    const component = render(
    <Store.LoginContext.Provider value={{ loginInfo, password, isLogin }}>  
        <LoginScreen />
    </Store.LoginContext.Provider>).toJSON();
    const input = screen.getByPlaceholderText('Login');
    expect(input.props.placeholder).toBe('Login');
  });

it('password testing placeholder', () => {
    const component = render(
    <Store.LoginContext.Provider value={{ loginInfo, password, isLogin }}>  
        <LoginScreen />
    </Store.LoginContext.Provider>).toJSON();
    const input = screen.getByPlaceholderText('Senha');
    expect(input.props.placeholder).toBe('Senha');
  });

it('error message', () => {
    const buttonLogin = render(
    <Store.LoginContext.Provider value={{ loginInfo, password, isLogin }}>  
        <LoginScreen />
    </Store.LoginContext.Provider>).toJSON();
    fireEvent.press(screen.getByTestId("test"))
});
