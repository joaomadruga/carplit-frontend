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
import NotificationPopup from '../../components/utils/NotificationPopup.component';
import * as utils from '../../helper/utils';

export default function RegisterScreen( {navigation} ) {
  const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (value, type) => {
    setLoginInfo(prev => ({...prev, [type]: value}))
  };

  const onSubmit = async () => {
    const isEmailValid = () => { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginInfo.login) };
    if (loginInfo.login && isEmailValid()) {
      setIsDisabled(true);
      const response = await utils.getIsEmailAvailable(loginInfo.login.toLowerCase().trim())
      .then(response => {
        navigation.navigate('SecondRegisterScreen');
      })
      .catch((error) => {
        console.log(error);
        setShowPopup(true);
      });
      setIsDisabled(false);
    } else {
      setShowPopup(true);
    };
  };
  return (
    <SafeAreaViewDefault>
      <PaddingContent>
        <View style={{flexDirection: 'column', justifyContent:'space-between', height: '100%'}}>
            <View>
                <CurrentScreenWidget numberOfFilledWidgets={1} />
                <InputWithTitleSubtitle
                    TextTitle={'Insira seu nome preferido'} 
                    TextSubtitle={'Como você deseja ser chamado'}
                    InputPlaceHolder={'Nome'}
                    onChangeText={(value) => {handleChange(value, 'name')}} 
                    value={loginInfo.name}
                />
                <InputWithTitleSubtitle
                    TextTitle={'Insira seu email'} 
                    TextSubtitle={'Não vamos te enviar spam nem nada, é só pra entrar no aplicativo mesmo :)'}
                    InputPlaceHolder={'Email'}
                    onChangeText={(value) => {handleChange(value, 'login')}} 
                    value={loginInfo.login}
                />
            </View>
            <ButtonPrimaryDefault 
              title={'Continuar'} 
              style={{marginBottom: 30}} 
              onPress={() => {onSubmit()}}
              disabled={isDisabled}
            />
        </View>
        { showPopup && <NotificationPopup title={"Email inválido ou já existente."} setShowPopup={setShowPopup} bottom={'30px'}/> }
      </PaddingContent>
    </SafeAreaViewDefault>
  );
}