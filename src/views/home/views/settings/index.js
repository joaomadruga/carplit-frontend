import { SafeAreaView, ScrollView } from "react-native";
import BigHeaderTitle from "../../../../components/utils/BigHeaderTitle.component";
import PaddingContent from "../../../../components/utils/PaddingContent.component";
import SettingsView from "../../../../components/settings/SettingsView.component";
import ButtonSecondarySmallDefault from "../../../../components/settings/ButtonSecondarySmall.component";
import TeamIcon from "../../../../../assets/Settings/team-icon.png";
import PinIcon from "../../../../../assets/Settings/pin-distance-icon.png";
import GasIcon from "../../../../../assets/Settings/gas-station-icon.png";
import * as Constants from "../../../../constants/utils/Constants"; 
import SafeAreaViewDefault from "../../../../components/utils/SafeAreaViewLogin.component";
import { CommonActions } from "@react-navigation/native";
import ModalPopup from "../../../../components/utils/ModalPopup.component";
import { useContext, useState } from "react";
import * as Store from "../../../../redux/store/store";
import ProfileView from "../../../../components/settings/ProfileView.component";

export default function SettingsScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const { loginInfo, setLoginInfo, setIsLogin } = useContext(Store.LoginContext);
    const logout = async () => {
        const delay = async (ms) => new Promise(res => setTimeout(res, ms));
        setModalVisible(false);
        await delay(400);
        setIsLogin(false);
        setLoginInfo({
            login: "",
            password: "",
            authToken: "",
            loginDate: "",
            averageConsumption: "",
            fuelPerLiter: "",
            currentImage: ""
        });
        navigation.dispatch(
            CommonActions.reset({
            index: 1,
            routes: [{
                name: 'Start'
            }],
            })
        );
    }
    return (
        <SafeAreaViewDefault>
            <ScrollView>
                <PaddingContent>
                        <BigHeaderTitle title={'Ajustes'}/>
                        <ProfileView TextTitle={loginInfo.userName} TextSubtitle={loginInfo.login} setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>
                        <SettingsView onPress={() => navigation.navigate('ConsumeFuel')} style={{marginTop: 16}} TextTitle={'Consumo e combustível'} TextSubtitle={'Consumo médio do seu carro e custo/L do combustível'} SourceImage={GasIcon}/>
                        <SettingsView onPress={() => navigation.navigate('RidersNavigator')} TextTitle={'Passageiros'} TextSubtitle={'Cadastros das pessoas que dividem o custo da viagem com você'} SourceImage={TeamIcon}/>
                        <SettingsView TextTitle={'Trajetos'} onPress={() => navigation.navigate('PathsNavigator')} TextSubtitle={'Cadastro das distâncias totais das suas rotas'} SourceImage={PinIcon}/>
                        <ButtonSecondarySmallDefault
                            title='Sair'
                            style={{marginTop: 24, marginBottom: 50}}
                            underlayColor={Constants.buttonConfig.Ontouch.Secondary.Default.BackgroundColor}
                            onPress={() =>  setModalVisible(true)}
                        />
                </PaddingContent>
            </ScrollView>
            <ModalPopup 
                modalState={{ modalVisible, setModalVisible }} 
                title={"Sair"} 
                subtitle={"Tem certeza que deseja sair da sua conta?"} 
                leftButtonTitle={"Cancelar"} 
                rightButtonTitle={"Sair"} 
                rightButtonPressed={() => { logout() }}
            />
        </SafeAreaViewDefault>
    );
}