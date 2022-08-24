import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SettingsView from '../../components/settings/SettingsView.component';
import BigHeaderTitle from '../../components/utils/BigHeaderTitle.component';
import PaddingContent from '../../components/utils/PaddingContent.component';
import * as Constants from "../../constants/utils/Constants";
import GasIcon from "../../../assets/Settings/gas-station-icon.png";
import PinIcon from "../../../assets/Settings/pin-distance-icon.png";
import TeamIcon from "../../../assets/Settings/team-icon.png";
import ButtonSecundaryDefault from '../../components/utils/ButtonSecondaryDefault.component';
import CenteredView from '../../components/utils/CenteredView.component';
import ButtonSecondarySmallDefault from '../../components/utils/ButtonSecondarySmall.component';

export default function SettingsScreen({ navigation }) {
    return (
        <SafeAreaView>
            <PaddingContent>
                    <BigHeaderTitle>Ajustes</BigHeaderTitle>
                    <SettingsView onPress={() => navigation.navigate('ConsumeFuel')} style={{marginTop: 16}} TextTitle={'Consumo e combustível'} TextSubtitle={'Consumo médio do seu carro e custo/L do combustível'} SourceImage={GasIcon}/>
                    <SettingsView TextTitle={'Passageiros'} TextSubtitle={'Cadastros das pessoas que dividem o custo da viagem com você'} SourceImage={TeamIcon}/>
                    <SettingsView TextTitle={'Trajetos'} TextSubtitle={'Cadastro das distâncias totais das suas rotas'} SourceImage={PinIcon}/>
                    <ButtonSecondarySmallDefault
                        title='Sair'
                        underlayColor={Constants.buttonConfig.Ontouch.Secondary.Default.BackgroundColor}
                        onPress={() => navigation.navigate('Login')}
                    />
            </PaddingContent>
        </SafeAreaView>
    );
}