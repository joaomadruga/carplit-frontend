import { Text, View } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/utils/Constants";
import ImageWrapper from "../utils/ImageWrapper.component";
import CoinIcon from "../../../assets/Home/coin-icon.png";

const HeaderFinanceStyle = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: 16px;
`

const Title = styled.Text`
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    color: ${Constants.colors.gray[600]};
`

const Subtitle = styled.Text`
    font-size: ${Constants.fontConfig.Xsm.Bold.FontSize};
    font-family: ${Constants.fontConfig.Xsm.Bold.FontFamily};
    color: ${Constants.colors.gray[600]};
    z-index: -1;
`

const Box = styled.View`
    background-color: ${Constants.colors.support.Green[100]};
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    padding: 16px 10px;
    margin-top: 16px;
    width: 100%;
`

const TextBox = styled.Text`
    font-size: ${Constants.fontConfig.Sm.Medium.FontSize};
    font-family: ${Constants.fontConfig.Sm.Medium.FontFamily};
    color: ${Constants.colors.support.Green[500]};
    word-break: break-word;
    padding: 0 15px;
`

const TextBoxBold = styled.Text`
    font-size: ${Constants.fontConfig.Sm.Bold.FontSize};
    font-family: ${Constants.fontConfig.Sm.Bold.FontFamily};
    color: ${Constants.colors.support.Green[500]};
`

export default function HeaderFinanceHeader({ selectedValue, cost, userReceived, saved, rideBalance }){
    const formatedValueUserReceived = Constants.formatter.format(userReceived);
    const formatedValueBalance = Constants.formatter.format(rideBalance);
    const formatedValueCost = Constants.formatter.format(cost);
    const formatedValueSaved = Constants.formatter.format(saved);
    return (
        <HeaderFinanceStyle>
            <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 24}}>
                    <Subtitle>Valor recebido</Subtitle>
                    <Title>{formatedValueUserReceived}</Title>
                </View>
                <View style={{marginRight: 24}}>
                    <Subtitle>Custo das caronas</Subtitle>
                    <Title>{formatedValueCost}</Title>
                </View>
                <View>
                    <Subtitle>Saldo das caronas</Subtitle>
                    <Title>{rideBalance < 0 ? formatedValueBalance.replace('-', '- '): `+ ${formatedValueBalance}`}</Title>
                </View>
            </View>

            <Box>
                <ImageWrapper source={CoinIcon} width={'24px'} height={'24px'}/>
                <TextBox>Oferecendo caronas você já economizou <TextBoxBold>{formatedValueSaved}</TextBoxBold>{selectedValue ? ` nos últimos ${selectedValue}.`: '.'}</TextBox>
            </Box>
            
        </HeaderFinanceStyle>
    )
}