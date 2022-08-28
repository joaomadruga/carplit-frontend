import { useState } from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';
import { RectButton } from 'react-native-gesture-handler';


const SwitchButtonStyle = styled.View`
    margin-top: 16px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 48px;
    margin-bottom: 20px;
`

const Button = styled.TouchableHighlight`
    border-color: ${Constants.colors.gray[100]};
    background-color: ${props => props.isSelected ? Constants.colors.primary[200] : Constants.colors.gray[0]};
    border-style: solid;
    border-width: 1px;
    ${ ({ isLeft }) => isLeft ? 'border-top-left-radius: 8px; border-bottom-left-radius: 8px' : 'border-top-right-radius: 8px; border-bottom-right-radius: 8px'};
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const ButtonText = styled.Text`
    color: ${props => props.isSelected ? Constants.colors.primary[600] : Constants.colors.gray[700]};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
`

export function SwitchButton({ isSelectedState }){
    const {isSelected, setIsSelected} = isSelectedState;

    const invertIsSelected = (isButtonSelected) => { if (!isButtonSelected) setIsSelected(!isSelected) };

    return (
        <SwitchButtonStyle>
            <Button
            onPress={() => invertIsSelected(isSelected)}
            isSelected={isSelected}
            isLeft={true}
            activeOpacity={0.5}
            underlayColor={isSelected ? Constants.colors.gray[0] : Constants.colors.primary[200]}
            >
                <ButtonText isSelected={isSelected}>Valor automático</ButtonText>
            </Button>
            <Button 
            onPress={() => invertIsSelected(!isSelected)} 
            isSelected={!isSelected}
            activeOpacity={0.5}
            isLeft={false}
            underlayColor={isSelected ? Constants.colors.gray[0] : Constants.colors.primary[200]}
            >
                <ButtonText isSelected={!isSelected}>Valor fixo</ButtonText>
            </Button>
        </SwitchButtonStyle>
    )
};