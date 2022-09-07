import { useEffect, useRef, useState } from 'react';
import { Animated, Modal, Text, View, Easing, Bounce, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import CloseIcon from "../../../assets/Home/close-icon.png";
import ImageWrapper from '../utils/ImageWrapper.component';

const CarpoolPopupStyle = styled(Animated.View)`
    align-self: center;
    position: absolute;
    bottom: 15px;
    background-color: ${Constants.colors.gray[700]};
    width: 100%;
    border-radius: 8px;
    padding: 16px;
    z-index: 999;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const CarpoolTextPopupStyle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    color: ${Constants.colors.gray[100]};
`

export default function CarpoolPopup({ setShowPopup }) {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const positionAnim = useRef(new Animated.Value(100)).current  // Initial value for position: 100
    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true,
            Bounce
        }).start()
    };
    const fadeOut = () => {
        const duration = 1000;
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
            Easing
        }).start();
        setTimeout(() => setShowPopup(false), duration)
    };
    const positionAnimation = () => {
        Animated.timing(positionAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            Bounce
        }).start()
    };
    useEffect(() => {
        fadeIn();
        positionAnimation();
        setTimeout(fadeOut, 3000);
    }, [])

    return (
        <CarpoolPopupStyle style={{transform: [{ translateY: positionAnim }], opacity: fadeAnim}}>
            <CarpoolTextPopupStyle>Trajeto adicionado com sucesso</CarpoolTextPopupStyle>
            <TouchableWithoutFeedback onPress={() => fadeOut()}>
                <ImageWrapper source={CloseIcon} width={'24px'} height={'24px'}/>
            </TouchableWithoutFeedback>
        </CarpoolPopupStyle>
    )
};