import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from '../../../constants/utils/Constants';
import Input from './Input.component';


const InputWithTitleSubtitleStyle = styled.View`
    background-color: ${Constants.colors.gray[0]};
    margin-top: 8px;
    max-width: 500px;
`;

const Title = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`;

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-top: 4px;
    margin-bottom: 16px;
`;

const styles = StyleSheet.create({
    inputContainer: {
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      marginHorizontal: 10,
      borderRadius: 10
    },
    prefix: {
      paddingHorizontal: 10,
      fontWeight: 'bold',
      color: 'black'
    }
  })

export default function ConsumeFuelInput({ TextTitle, TextSubtitle, fixedPriceState, ...props }) {
    return (
        <InputWithTitleSubtitleStyle {...props}>
            <Title>{TextTitle}</Title>
            <Subtitle>{TextSubtitle}</Subtitle>
            <Input fixedPriceState={fixedPriceState} SufixValue={"km/L"} InputFormatter={Constants.ConsumeInputFormatter}/>
        </InputWithTitleSubtitleStyle>
    )
};