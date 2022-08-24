import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import ImageWrapper from '../utils/ImageWrapper.component';
import EmptyImage from "../../../assets/Home/Empty.png";
import { View } from 'react-native';

const Title = styled.Text`
    color: ${Constants.colors.gray[700]};
    font-size: ${Constants.fontConfig.H3.Bold.FontSize};
    font-family: ${Constants.fontConfig.H3.Bold.FontFamily};
`;

const Subtitle = styled.Text`
    color: ${Constants.colors.gray[600]};
    font-size: ${Constants.fontConfig.H3.Regular.FontSize};
    font-family: ${Constants.fontConfig.H3.Regular.FontFamily};
    text-align: center;
`;

const ContentView = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export default function Empty({ ...props }) {
  return (
    <ContentView>
        <ImageWrapper source={EmptyImage} width={'100%'} height={'45%'} resizeMode={'contain'}/>
        <Title>Você ainda não registrou caronas!</Title>
        <Subtitle>Toque no botão de adicionar + para registar uma nova carona</Subtitle>
    </ContentView>
  );
}