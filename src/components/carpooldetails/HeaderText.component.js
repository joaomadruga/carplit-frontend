import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';
import PaddingContent from '../utils/PaddingContent.component';

const HeaderTextStyle = styled.View`
    margin-top: 16px;
    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`;

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
    font-size: ${Constants.fontConfig.Body.Bold.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-top: 2px;
`

const SmallTitle = styled.Text`
    color: ${Constants.colors.gray[700]};
    font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
    font-size: ${Constants.fontConfig.Body.Bold.FontSize};
    margin: 16px 0;
    align-self: flex-start;
`

const TextView = styled.View`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
`

export function HeaderText({titleText, subtitleText, consumeFuel, carpoolPrice}){
    const formattedCarpoolPrice = Constants.formatter.format(carpoolPrice);
    return (
        <HeaderTextStyle>
            <Title>{titleText}</Title>
            <Subtitle>{`${subtitleText}km - ${consumeFuel}L - ${formattedCarpoolPrice}`}</Subtitle>
            <BottomLine marginTop={24} />
            <TextView>
                <SmallTitle>Registro de pagamentos</SmallTitle>
                <SmallTitle>Pagou?</SmallTitle>
            </TextView>
        </HeaderTextStyle>
    )
};