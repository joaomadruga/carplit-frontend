import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Constants from "../../constants/utils/Constants";
import SafeAreaViewStart from '../../components/start/SafeAreaViewStart.component';
import MainImage from "../../../assets/Start/main-image.png";
import PeopleImage from "../../../assets/Start/people-image.png";
import TextMainStart from '../../components/start/TextMainStart.component';
import TextSubtitleStart from '../../components/start/TextSubtitleStart.component';
import ButtonPrimaryDefault from '../../components/utils/ButtonPrimaryDefault.component';
import CenteredView from '../../components/utils/CenteredView.component';
import ImageWrapper from '../../components/utils/ImageWrapper.component';
import StartComponent from '../../components/start/StartContent.component';
import ButtonSecundaryDefault from '../../components/utils/ButtonSecondaryDefault.component';
export default function StartScreen({ navigation }) {

  return (
    <SafeAreaViewStart>
      <StartComponent style={{width: '100%', height: '100%', padding: 20}}>
        <ImageWrapper source={MainImage} width={'100%'} height={'40%'} resizeMode={'contain'}/>
        <ImageWrapper source={PeopleImage} width={'101px'} height={'26px'}/>
        <CenteredView>
            <TextMainStart>Organizando suas caronas!</TextMainStart>
            <TextSubtitleStart>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ante elit</TextSubtitleStart>
        </CenteredView>
        <CenteredView>
          <ButtonPrimaryDefault
            title='Criar uma conta'
            underlayColor={Constants.buttonConfig.Ontouch.Primary.Default.BackgroundColor}
            onPress={() => console.log('Pressed!')}
            marginBottom={10}
          />
          <ButtonSecundaryDefault
            title='Entrar'
            underlayColor={Constants.buttonConfig.Ontouch.Secondary.Default.BackgroundColor}
            onPress={() => navigation.navigate('Login')}
          />
        </CenteredView>
        </StartComponent>
    </SafeAreaViewStart>
  );
}