import { View } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/utils/Constants";

const HeaderFinanceStyle = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: 24px;
`

const Title = styled.Text`
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    color: ${Constants.colors.gray[600]};
`

const GreenTitle = styled.Text`
    font-size: 24px;
    font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
    color: ${Constants.colors.support.Green[500]};
    margin-bottom: 16px;
`

const RedTitle = styled.Text`
    font-size: 24px;
    font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
    color: #CB1F1F;
    margin-bottom: 16px;
`

const Subtitle = styled.Text`
    font-size: ${Constants.fontConfig.Xsm.Bold.FontSize};
    font-family: ${Constants.fontConfig.Xsm.Bold.FontFamily};
    color: ${Constants.colors.gray[600]};
    z-index: -1;
`

const TotalTitle = styled.Text`
    font-size: ${Constants.fontConfig.Sm.Bold.FontSize};
    font-family: ${Constants.fontConfig.Sm.Bold.FontFamily};
    color: ${Constants.colors.gray[600]};
`

const RightTitle = styled.Text`
    font-size: ${Constants.fontConfig.Xsm.Regular.FontSize};
    font-family: ${Constants.fontConfig.Xsm.Regular.FontFamily};
    color: ${Constants.colors.gray[700]};
`

export default function HeaderFinanceHeader({ selectedValue, cost, userReceived }){
    const balanceValue = userReceived - cost;
    const formatedValueUserReceived = Constants.formatter.format(userReceived);
    const formatedValueBalance = Constants.formatter.format(balanceValue);
    const formatedValueCost = Constants.formatter.format(cost);
    return (
        <HeaderFinanceStyle>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <View>
                    <TotalTitle>Saldo total das caronas</TotalTitle>
                    { balanceValue < 0 ? <RedTitle>{formatedValueBalance.replace('-', '- ')}</RedTitle> : <GreenTitle>+ {formatedValueBalance}</GreenTitle>}
                </View>
                {selectedValue && <RightTitle>Nos últimos {selectedValue}</RightTitle>}
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 24}}>
                    <Subtitle>Valor recebido</Subtitle>
                    <Title>{formatedValueUserReceived}</Title>
                </View>
                <View>
                    <Subtitle>Custo das caronas</Subtitle>
                    <Title>{formatedValueCost}</Title>
                </View>
            </View>
        </HeaderFinanceStyle>
    )
}