import { useState } from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const AutoValueViewStyle = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 16px 0;
`

const AutoValueText = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-right: 8px;
`

export default function AutoValueView({ isEnabledState }){
    const {isEnabled, setIsEnabled} = isEnabledState;

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <AutoValueViewStyle>
            <AutoValueText>Se incluir na divisão de custos</AutoValueText>
            <Switch 
            onValueChange={toggleSwitch} 
            value={isEnabled} 
            trackColor={{ false: "#767577", true: Constants.colors.primary[600] }}
            thumbColor={isEnabled ? Constants.colors.gray[0] : "#f4f3f4"}
            />
        </AutoValueViewStyle>
    )
};