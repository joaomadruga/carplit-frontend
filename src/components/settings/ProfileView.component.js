import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import ImageWrapper from '../utils/ImageWrapper.component';
import BottomLine from '../utils/BottomLine.component';
import { useEffect, useState } from 'react';

const ProfileViewStyle = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 16px;
`;

const Title = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
    margin-top: 8px;
`;

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-bottom: 20px;
`;

const ImageBackground = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: ${Constants.colors.primary[200]};
    border-radius: 50%;
    overflow: hidden;
    z-index: 999;
    justify-content: center;
    align-items: center;
`

export default function ProfileView({ TextTitle, TextSubtitle, SourceImage, setLoginInfo, loginInfo, ...props }) {
    const [currentImage, setCurrentImage] = useState(loginInfo.currentImage || Math.floor(Math.random() * (105 - 0) ) + 0);
    const updateCurrentImage = () => {
        setCurrentImage(Constants.possibleProfilePicture[Math.floor(Math.random() * (105 - 0) ) + 0]);
    };
    useEffect(() => {
        setLoginInfo(prev => ({...prev, ["currentImage"]: currentImage}));
    }, [currentImage]);
    return (
        <ProfileViewStyle {...props}>
            <ImageBackground onPress={() => updateCurrentImage()} activeOpacity={0.5}> 
                <Image source={currentImage} style={{width: 76, height: 76, marginBottom: -25}}/>
            </ImageBackground>
            <Title>{TextTitle}</Title>
            <Subtitle>{TextSubtitle}</Subtitle>
            <BottomLine />
        </ProfileViewStyle>
    )
};