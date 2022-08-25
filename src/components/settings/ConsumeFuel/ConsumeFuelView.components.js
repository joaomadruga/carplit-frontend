import { View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from '../../../constants/utils/Constants';

const ConsumeFuelViewStyle = styled.Text`
    background-color: ${Constants.colors.gray[0]};
    padding: 16px;
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;

const Title = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
    align-self: flex-start;
`;

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-top: 4px;
    align-self: flex-start;
`;

export default function ConsumeFuelView({ TextTitle, TextSubtitle, ...props }) { 
    return (
        <ConsumeFuelViewStyle {...props}>
            <View style={{width: '100%' }}>
                <Title>{TextTitle}</Title>
                <Subtitle>{TextSubtitle}</Subtitle>
            </View>
        </ConsumeFuelViewStyle>
    )
};