import { Image, Linking, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Constants from "../../constants/utils/Constants";
import SafeAreaViewStart from '../../components/start/SafeAreaViewStart.component';
import MainImage from "../../../assets/Start/main-image.png";
import PeopleImage from "../../../assets/Start/people-image.png";
import TextMainStart from '../../components/start/TextMainStart.component';
import TextSubtitleStart from '../../components/start/TextSubtitleStart.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component';
import CenteredView from '../../components/utils/CenteredView.component';
import ImageWrapper from '../../components/utils/ImageWrapper.component';
import ButtonSecundaryDefault from '../../components/utils/ButtonSecondaryDefault.component';
import PaddingContent from '../../components/utils/PaddingContent.component';
import api from '../../helper/api';
import { useContext, useEffect } from 'react';
import * as Store from "../../redux/store/store";
import { CommonActions } from '@react-navigation/native';

export default function StartScreen({ navigation }) {
  const { isLogin } = useContext(Store.LoginContext);
  useEffect(() => {
    if (isLogin) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{
            name: 'HomeRoutes',
            params: {'isRegister': false}
          }],
        })
      );
    }
  }, [isLogin]);
  return (
    <SafeAreaViewStart>
      <PaddingContent style={{justifyContent: 'space-evenly', alignItems: 'center'}}>
        <ImageWrapper source={MainImage} width={'100%'} height={'40%'} resizeMode={'contain'}/>
        <ImageWrapper source={PeopleImage} width={'101px'} height={'26px'}/>
        <CenteredView>
            <TextMainStart>Gerenciando suas caronas!</TextMainStart>
            <TextSubtitleStart>Você no controle do gastos e recebimentos das suas caronas.</TextSubtitleStart>
        </CenteredView>
        <CenteredView>
          <ButtonPrimaryDefault
            title='Criar uma conta'
            underlayColor={Constants.buttonConfig.Ontouch.Primary.Default.BackgroundColor}
            onPress={() => { navigation.navigate('Register') }}
            marginBottom={10}
          />
          <ButtonSecundaryDefault
            title='Entrar'
            underlayColor={Constants.buttonConfig.Ontouch.Secondary.Default.BackgroundColor}
            onPress={() => navigation.navigate('Login')}
          />
        </CenteredView>
        </PaddingContent>
    </SafeAreaViewStart>
  );
}