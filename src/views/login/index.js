import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SafeAreaViewLogin from '../../components/login/SafeAreaViewLogin.component';
import LoginTitle from '../../components/login/TitleLogin.component.component';
import Input from '../../components/utils/Input.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component'
import * as Constants from "../../constants/utils/Constants";
import TextForgotPassword from '../../components/login/TextForgotPassword.component';
import LoginContent from '../../components/login/LoginContent.component';
import { useEffect, useState } from 'react';

export default function LoginScreen() {
  const [loginInfo, setLoginInfo] = useState({
    login: "",
    password: ""
  })

  const handleChange = (value, type) => {
    setLoginInfo(prev => ({...prev, [type]: value}))
  }
  return (
    <SafeAreaViewLogin>
      <LoginContent>
        <Input placeholder="Email" marginBottom={12} onChangeText={(value) => {handleChange(value, 'login')}} value={loginInfo.login}/>
        <Input placeholder="Senha" secureTextEntry={true} marginBottom={38} onChangeText={(value) => {handleChange(value, 'password')}} value={loginInfo.password}/>
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