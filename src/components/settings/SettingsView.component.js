import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import ImageWrapper from '../utils/ImageWrapper.component';

const SettingsViewStyle = styled.TouchableOpacity`
    background-color: ${Constants.colors.gray[0]};
    border: 1px solid ${Constants.colors.gray[400]};
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    height: 92px;
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
`;

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-top: 4px;
`;

export default function SettingsView({ TextTitle, TextSubtitle, SourceImage, ...props }) { 
    return (
        <SettingsViewStyle {...props}>
            <ImageWrapper source={SourceImage} width={'24px'} height={'24px'} style={{marginRight: 16}}/>
            <View style={{width: '80%' }}>
                <Title>{TextTitle}</Title>
                <Subtitle>{TextSubtitle}</Subtitle>
            </View>
        </SettingsViewStyle>
    )
};