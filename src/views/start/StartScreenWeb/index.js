import SafeAreaViewStart from "../../../components/start/SafeAreaViewStart.component";
import PaddingContent from "../../../components/utils/PaddingContent.component";
import * as Store from "../../../redux/store/store";
import { CommonActions } from '@react-navigation/native';
import { useContext, useEffect } from "react";
import { Image, Linking, Text, View } from "react-native";
import ButtonPrimaryDefault from "../../../components/utils/ButtonPrimaryDefault.component";
import ImageWrapper from "../../../components/utils/ImageWrapper.component";
import PeopleImage from "../../../../assets/Start/people-image.png";
import MockupImages from "../../../../assets/Start/mockup-images.png";
import CarplitIconPurple from "../../../../assets/carplit-icon-purple.png";
import ArrowRightWhite from "../../../../assets/Button/arrow-right-white.png";
import TextMainStart from "../../../components/start/TextMainStart.component";
import TextSubtitleStart from "../../../components/start/TextSubtitleStart.component";
import ButtonPrimaryDefaultWeb from "../../../components/start/ButtonPrimaryDefaultWeb.component";
import ButtonGooglePlay from "../../../components/start/ButtonGooglePlay.component";
import FooterText from "../../../components/start/FooterText.component";
import HeaderWeb from "../../../components/start/HeaderWeb.component";
import StartScreenWebView from "../../../components/start/StartScreenWebView.component";
import { LinearGradient } from 'expo-linear-gradient';

export default function StartScreenWeb({ navigation }) {
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
        <StartScreenWebView>
            <HeaderWeb>
                <ImageWrapper source={CarplitIconPurple} width={'70px'} height={'68px'}/>
                <ButtonGooglePlay onPress={() => Linking.openURL('https://play.google.com/')} />
            </HeaderWeb>
            <View style={{flexDirection: 'row', flex: 1}}>
                <Image source={MockupImages} style={{width: '100%', height: '100%', resizeMode: 'cover', flex: 1, zIndex: -1}}/>
                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                    <View/>
                    <View style={{flexDirection: 'column', alignItems: 'left', marginTop: -50}}>
                        <ImageWrapper source={PeopleImage} width={'66px'} height={'16px'}/>
                        <TextMainStart style={{textAlign: 'left', maxWidth: 500, marginTop: 8}}>Facilitando o gerenciamento financeiro de quem oferece carona!</TextMainStart>
                        <TextSubtitleStart style={{ width: '50%', textAlign: 'left', marginTop: 8}}>Cadastre passageiros e roteiros, registre caronas, marque quem pagou e mantenha o histórico financeiro de suas caronas.</TextSubtitleStart>
                        <ButtonPrimaryDefaultWeb title={"Ir para o app"} onPress={() => {navigation.navigate('Start')}}/>
                    </View>

                    <FooterText>created by josé, thaís, pedro, joão e gilberto | carplit ® 2022</FooterText>
                </View>
            </View>
            
        </StartScreenWebView>
    );
}