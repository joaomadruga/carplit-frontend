import { useState } from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';
import { RectButton, BorderlessButton, BaseButton } from 'react-native-gesture-handler';


const SwitchButtonStyle = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Button = styled.TouchableOpacity`
    border-color: ${Constants.colors.gray[100]};
    background-color: ${props => props.isSelected ? Constants.colors.primary[200] : Constants.colors.gray[0]};
    border-style: solid;
    border-width: 1px;
    ${ ({ isLeft }) => isLeft ? 'border-top-left-radius: 8px; border-bottom-left-radius: 8px' : 'border-top-right-radius: 8px; border-bottom-right-radius: 8px'};
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 14px 0;
`

const ButtonText = styled.Text`
    color: ${props => props.isSelected ? Constants.colors.primary[600] : Constants.colors.gray[700]};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
`

export function SwitchButton({ isLeftSelectedState, isSoloCarpool }){
    const {isLeftSelected, setIsLeftSelected} = isLeftSelectedState;

    const invertIsSelected = (isButtonSelected) => { if (!isButtonSelected) setIsLeftSelected(!isLeftSelected) };

    return (
        <SwitchButtonStyle>
            <Button
            onPress={() => invertIsSelected(isLeftSelected)}
            isSelected={isLeftSelected}
            isLeft={true}
            underlayColor={isLeftSelected ? Constants.colors.gray[0] : Constants.colors.primary[200]}
            >
                <ButtonText isSelected={isLeftSelected}>Valor automático</ButtonText>
            </Button>
            <Button 
            onPress={() => invertIsSelected(!isLeftSelected)} 
            isSelected={!isLeftSelected}
            isLeft={false}
            underlayColor={isLeftSelected ? Constants.colors.gray[0] : Constants.colors.primary[200]}
            disabled={isSoloCarpool}
            >
                <ButtonText isSelected={!isLeftSelected}>Valor fixo</ButtonText>
            </Button>
        </SwitchButtonStyle>
    )
};