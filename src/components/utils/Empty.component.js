import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import ImageWrapper from './ImageWrapper.component';
import EmptyImage from "../../../assets/Home/Empty.png";

const Title = styled.Text`
    color: ${Constants.colors.gray[700]};
    font-size: ${Constants.fontConfig.H3.Bold.FontSize};
    font-family: ${Constants.fontConfig.H3.Bold.FontFamily};
    margin-top: 16px;
`;

const Subtitle = styled.Text`
    color: ${Constants.colors.gray[600]};
    font-size: ${Constants.fontConfig.H3.Regular.FontSize};
    font-family: ${Constants.fontConfig.H3.Regular.FontFamily};
    text-align: center;
    margin-top: 8px;
`;

const ContentView = styled.View`
    display: flex;
    align-items: center;
`

export default function Empty({ title, subtitle, ...props }) {
  return (
    <ContentView>
        <ImageWrapper source={EmptyImage} width={'100%'} height={'45%'} resizeMode={'contain'}/>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </ContentView>
  );
}