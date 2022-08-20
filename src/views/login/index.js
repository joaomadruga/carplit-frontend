import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SafeAreaViewLogin from '../../components/login/SafeAreaViewLogin.component';
import LoginTitle from '../../components/login/TitleLogin.component.component';
import Input from '../../components/utils/Input.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component'
import * as Constants from "../../constants/utils/constants";
import TextForgotPassword from '../../components/login/TextForgotPassword.component';
import LoginContent from '../../components/login/LoginContent.component';
import { useEffect, useState } from 'react';

export default function LoginScreen() {
  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  return (
    <SafeAreaViewLogin>
      <LoginContent>
        <Input placeholder="Login" marginBottom={12} onChangeText={setInputLogin} value={inputLogin}/>
        <Input placeholder="Senha" secureTextEntry={true} marginBottom={38} onChangeText={setInputPassword} value={inputPassword}/>
        <ButtonPrimaryDefault
          title='Entrar'
          underlayColor={Constants.buttonConfig.Ontouch.Primary.Default.BackgroundColor}
          onPress={() => console.log('Pressed!')}
        />
        <TextForgotPassword>Esqueci minha senha</TextForgotPassword>
      </LoginContent>
    </SafeAreaViewLogin>
  );
}