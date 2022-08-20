import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Constants from "../../constants/utils/Constants";
import SafeAreaViewStart from '../../components/start/SafeAreaViewStart.component';
import MainImage from "../../../assets/Start/main-image.png";
import PeopleImage from "../../../assets/Start/people-image.png";
import TextMainStart from '../../components/start/TextMainStart.component';
import TextSubtitleStart from '../../components/start/TextSubtitleStart.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component';
import CenteredView from '../../components/utils/CenteredView.component';
import ImageWrapper from '../../components/utils/ImageWrapper.component';
export default function StartScreen({ navigation }) {

  return (
    <SafeAreaViewStart>
        <ImageWrapper source={MainImage} width={165} height={150}/>
        <ImageWrapper source={PeopleImage} width={101} height={26}/>
        <CenteredView>
            <TextMainStart>Organizando suas caronas!</TextMainStart>
            <TextSubtitleStart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ante elit</TextSubtitleStart>
        </CenteredView>
        <ButtonPrimaryDefault
          title='Criar uma conta'
          underlayColor={Constants.buttonConfig.Ontouch.Primary.Default.BackgroundColor}
          onPress={() => console.log('Pressed!')}
        />
        <ButtonPrimaryDefault
          title='Entrar'
          underlayColor={Constants.buttonConfig.Ontouch.Primary.Default.BackgroundColor}
          onPress={() => navigation.navigate('Login')}
        />
    </SafeAreaViewStart>
  );
}