import { createRef, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

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

export default function Input({ InputPlaceHolder, pathInfoState, SufixValue, InputFormatter, ...props }) {
    const {pathInfo, setPathInfo} = pathInfoState;
    const inputRef = useRef();
    const handleChange = (value, type) => {
        setPathInfo(prev => ({...prev, [type]: value}))
    }
    return (
        <ViewInput onPress={() => inputRef.current.focus()} activeOpacity={1} >
            <InputStyle
            ref={inputRef}
            keyboardType={"numeric"}
            placeholder={InputPlaceHolder}
            value={pathInfo.pathDistance}
            placeholderTextColor={Constants.inputConfig.Default.Color}
            onChangeText={(value) => {
                const valueFiltered = value.replace(',', '.').replace(/[^0-9]/g, '');
                handleChange(InputFormatter(valueFiltered), 'pathDistance');
            }}/>
            {pathInfo.pathDistance && <SufixText>{SufixValue}</SufixText>}
        </ViewInput>
    );
}