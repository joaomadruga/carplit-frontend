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
    margin: 16px;
    margin-left: -16px;
    align-self: flex-start;
`

export function HeaderText({titleText, subtitleText, consumePath, carpoolPrice}){
    return (
        <PaddingContent style={{height: 'auto'}}>
            <HeaderTextStyle>
                <Title>{titleText}</Title>
                <Subtitle>{`${subtitleText}km - ${consumePath}L - R$ ${carpoolPrice}`}</Subtitle>
                <BottomLine marginTop={24} />
                <SmallTitle>Distribuição de custos</SmallTitle>
            </HeaderTextStyle>
        </PaddingContent>
    )
};