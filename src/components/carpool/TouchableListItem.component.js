import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import { Dimensions } from 'react-native';
import BottomLine from '../utils/BottomLine.component';

const TouchableListItemStyle = styled.TouchableOpacity`
    padding: 16px 0;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    max-width: 90%;
`

export default function TouchableListItem({titleText, subtitleText, ...props}){
    return (
        <>
            <TouchableListItemStyle {...props}>
                <Title>{titleText}</Title>
                <Subtitle>{subtitleText > 0 ? ` ${subtitleText} pessoas + você` : `Apenas você.`}</Subtitle>
            </TouchableListItemStyle>
            <BottomLine />
        </>
    )
};