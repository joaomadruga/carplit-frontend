import { View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from '../../../constants/utils/Constants';

const ConsumeFuelViewStyle = styled.View`
    background-color: ${Constants.colors.gray[0]};
    margin-top: 8px;
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

export default function ConsumeFuelView({ TextTitle, TextSubtitle, ...props }) { 
    return (
        <ConsumeFuelViewStyle {...props}>
            <Title>{TextTitle}</Title>
            <Subtitle>{TextSubtitle}</Subtitle>
        </ConsumeFuelViewStyle>
    )
};