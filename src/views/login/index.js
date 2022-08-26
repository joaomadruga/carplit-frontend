import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SafeAreaViewLogin from '../../components/utils/SafeAreaViewLogin.component';
import LoginTitle from '../../components/login/TitleLogin.component.component';
import Input from '../../components/utils/Input.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component'
import * as Constants from "../../constants/utils/Constants";
import TextForgotPassword from '../../components/login/TextForgotPassword.component';
import { useContext, useEffect, useState } from 'react'
import { CommonActions } from '@react-navigation/native';
import { LoginContext } from '../../routes/routes';
import CenteredView from '../../components/utils/CenteredView.component';
import PaddingContent from '../../components/utils/PaddingContent.component';
import { TextInput } from 'react-native-paper';
import SafeAreaViewDefault from '../../components/utils/SafeAreaViewLogin.component';

export default function LoginScreen( {navigation} ) {
  
  const { loginInfo, setLoginInfo } = useContext(LoginContext);
  const handleChange = (value, type) => {
    setLoginInfo(prev => ({...prev, [type]: value}))
  }
  return (
    <SafeAreaViewDefault>
      <PaddingContent style={{marginTop: 40}}>
        <Input placeholder="Login" marginBottom={12} onChangeText={(value) => {handleChange(value, 'login')}} value={loginInfo.login}/>
        <Input placeholder="Senha" secureTextEntry={true} marginBottom={38} onChangeText={(value) => {handleChange(value, 'password')}} value={loginInfo.password}/>
        <ButtonPrimaryDefault
          title='Entrar'
          onPress={() => navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{
                name: 'LoginHome',
                params: { userLogin: loginInfo.login} 
              }],
            })
          )}
          
        />
        <TextForgotPassword>Esqueci minha senha</TextForgotPassword>
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}