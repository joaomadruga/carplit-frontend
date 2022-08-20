import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Constants from "../../constants/utils/Constants";
import SafeAreaViewStart from '../../components/start/SafeAreaViewStart.component';
import MainImage from "../../../assets/Start/main-image.svg";
import PeopleImage from "../../../assets/Start/people-image.svg";
import TextMainStart from '../../components/start/TextMainStart.component';
import TextSubtitleStart from '../../components/start/TextSubtitleStart.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component';
import CenteredView from '../../components/utils/CenteredView.component';
export default function StartScreen({ navigation }) {

  return (
    <SafeAreaViewStart>
        <MainImage/>
        <PeopleImage/>
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