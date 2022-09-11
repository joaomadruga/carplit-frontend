import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import PaddingContent from '../utils/PaddingContent.component';

const HeaderTextStyle = styled.View`
    margin-top: 8px;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
    margin-bottom: 8px;
`;

const Subtitle = styled.Text`
    color: ${Constants.colors.gray[800]};
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    margin-top: 4px;
    margin-bottom: 16px;
`

const SmallTitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Bold.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Bold.FontSize};
    color: ${Constants.colors.gray[600]};
`

export function HeaderText({name, address}){
    return (
        <HeaderTextStyle>
            <Title>Cadastro</Title>
            <SmallTitle>Nome</SmallTitle>
            <Subtitle>{name}</Subtitle>
            <SmallTitle>Endereço ou ponto de encontro</SmallTitle>
            <Subtitle>{address}</Subtitle>
        </HeaderTextStyle>
    )
};