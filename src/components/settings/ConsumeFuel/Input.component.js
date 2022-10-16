import { createRef, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../../constants/utils/Constants";

const InputStyle = styled.TextInput`
  background-color: ${Constants.inputConfig.Default.BackgroundColor};
  max-width: 90%;
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  color: ${Constants.inputConfig.Ontouch.Settings.Color};
`;

const ViewInput = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center; 
    background-color: ${Constants.inputConfig.Default.BackgroundColor};
    height: ${Constants.inputConfig.Default.Height};
    margin-bottom: 24px;
    border-radius: ${Constants.inputConfig.Default.Radius};
    width: 100%;
    padding: ${Constants.inputConfig.Default.Padding};
`

const SufixText = styled.Text`
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    color: ${Constants.inputConfig.Ontouch.Settings.Color};
    margin-left: 5px;
`

export default function Input({ fixedPriceState, SufixValue, InputFormatter, ...props }) {
    const {fixedState, setFixedState} = fixedPriceState;
    const inputRef = useRef();
    return (
        <ViewInput onPress={() => inputRef.current.focus()} activeOpacity={1} >
            <InputStyle
            ref={inputRef}
            keyboardType={"numeric"}
            placeholderTextColor={Constants.inputConfig.Default.Color}
            value={fixedState}
            onChangeText={(value) => {
                const valueFiltered = value.replace(',', '.').replace(/[^0-9]/g, '');
                setFixedState(InputFormatter(valueFiltered));
            }}/>
            <SufixText>{SufixValue}</SufixText>
        </ViewInput>
    );
}