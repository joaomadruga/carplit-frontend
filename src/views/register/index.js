import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SafeAreaViewLogin from '../../components/utils/SafeAreaViewLogin.component';
import LoginTitle from '../../components/login/TitleLogin.component.component';
import Input from '../../components/utils/Input.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component'
import * as Constants from "../../constants/utils/Constants";
import TextForgotPassword from '../../components/login/TextForgotPassword.component';
import { useContext, useEffect, useState } from 'react'
import { CommonActions } from '@react-navigation/native';
import * as Store from "../../redux/store/store";
import CenteredView from '../../components/utils/CenteredView.component';
import PaddingContent from '../../components/utils/PaddingContent.component';
import { TextInput } from 'react-native-paper';
import SafeAreaViewDefault from '../../components/utils/SafeAreaViewLogin.component';
import CurrentScreenWidget from '../../components/register/CurrentScreenWidget.component';
import InputWithTitleSubtitle from '../../components/utils/InputWithTitleSubtitle.component';

export default function RegisterScreen( {navigation} ) {
  const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
  const handleChange = (value, type) => {
    setLoginInfo(prev => ({...prev, [type]: value}))
  }
  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <View style={{flexDirection: 'column', justifyContent:'space-between', height: '100%'}}>
            <View>
                <CurrentScreenWidget numberOfFilledWidgets={1} />
                <InputWithTitleSubtitle
                    TextTitle={'Insira seu email'} 
                    TextSubtitle={'Não vamos te enviar spam nem nada, é só pra entrar no aplicativo mesmo :)'}
                    InputPlaceHolder={'Email'}
                    //onChangeText={(value) => {handleChange(value, 'login')}} 
                    //value={loginInfo.login}
                />
            </View>
            <ButtonPrimaryDefault title={'Continuar'} style={{marginBottom: 30}} onPress={() => {navigation.navigate('SecondRegisterScreen')}}/>
        </View>
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}