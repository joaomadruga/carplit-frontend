import { Dimensions, Linking, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import PaddingContent from '../utils/PaddingContent.component';
import WhatsappGreenIcon from "../../../assets/Settings/whatsapp-icon.png";
import WhatsappGrayIcon from "../../../assets/Settings/whatsapp-gray-icon.png";
import ImageWrapper from '../utils/ImageWrapper.component';
import { useEffect, useState } from 'react';

const FinanceViewStyle = styled.View`
    margin-top: 8px;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
    margin-bottom: 8px;
`;

const SmallTitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Bold.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Bold.FontSize};
    color: ${Constants.colors.gray[700]};
`

const MoneyText = styled.Text`
    color: ${Constants.colors.gray[800]};
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    margin-bottom: 16px;
`

const WhatsappButton = styled.TouchableOpacity`
    padding: 12px 60px;
    background-color: #3BC04D;
    border-radius: 4px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const WhatsappButtonText = styled.Text`
    color: ${Constants.colors.gray[0]};
    font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
    font-size: ${Constants.fontConfig.Body.Bold.FontSize};
    margin-right: 10px;
`

export function FinanceView({ carpoolHistory }){
    const [totalPaid, setTotalPaid] = useState(0);
    const [totalPending, setTotalPending] = useState(0);
    const filteredCarpoolHistory = () => { return carpoolHistory.filter((carpool) => {
        if (carpool.hasPaid) {
            setTotalPaid(carpool.price + totalPaid);
        } else {
            setTotalPending(carpool.price + totalPending);
        }
        return carpool.price;
    }) };
    
    const sendWhatsappMensage = () => {
        let whatsAppMsg = `Oi, passando pra te lembrar da carona! Ficou um valor de ${Constants.formatter.format(totalPending)} em aberto. Valeu!\n\n\n_OBS: valores calculados automaticamente pelo app Carplit!_`
        let url = 'whatsapp://send?text=' + whatsAppMsg;
        Linking.openURL(url);
    }

    useEffect(() => {
        filteredCarpoolHistory();
    }, [carpoolHistory]);
    return (
        <FinanceViewStyle>
            <Title>Financeiro</Title>
            <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 32}}>
                    <SmallTitle>Total Pago</SmallTitle>
                    <MoneyText>{Constants.formatter.format(totalPaid)}</MoneyText>
                </View>
                <View>
                    <SmallTitle>Total Pendente</SmallTitle>
                    <MoneyText>{Constants.formatter.format(totalPending)}</MoneyText>
                </View>
            </View>
            <WhatsappButton disabled={totalPending === 0 ? true : false} style={totalPending === 0 ? {backgroundColor: Constants.colors.gray[400]} : ""} onPress={() => { sendWhatsappMensage() } }>
                <WhatsappButtonText style={totalPending === 0 ? {color: Constants.colors.gray[700]} : ""}>Enviar valores pendentes</WhatsappButtonText>
                <ImageWrapper source={totalPending === 0 ? WhatsappGrayIcon : WhatsappGreenIcon } width={'24px'} height={'24px'} />
            </WhatsappButton>
        </FinanceViewStyle>
    )
};