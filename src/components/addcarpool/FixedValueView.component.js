import { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const FixedValueViewStyle = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 16px;
`

const FixedValueText = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-right: 8px;
`

const FixedValueInput = styled(TextInput)`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    max-width: 100%;
    width: 80px;
`

const InputView = styled.View`
    background-color: ${Constants.colors.gray[100]};
    padding: 16px 8px;
    border-radius: 8px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`

const InputText = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`

export default function FixedValueView(){
    const [inputValue, setInputValue] = useState('R$ 0,00');
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <FixedValueViewStyle>
            <FixedValueText>Valor fixo</FixedValueText>
            <InputView>
                    <FixedValueInput
                    keyboardType={"numeric"} 
                    value={inputValue}
                    
                    onChangeText={(value) => {
                        const valueFiltered = value.replace('.', ',').replace(/[^0-9,]/g, '');
                        setInputValue("R$ " + valueFiltered);
                    }}
                    onFocus= {() => {
                        const valueFiltered = inputValue.replace(/[$a-zA-Z.]/g, '');
                        setInputValue("R$ " + valueFiltered);
                    } }
                    onEndEditing= {() => {
                        const valueFiltered = inputValue.replace(/[$a-zA-Z.]/g, '').replace(',', '.');
                        const formatedValue = formatter.format(valueFiltered);
                        formatedValue.includes("NaN") ? setInputValue("R$ 0,00") : setInputValue(formatedValue)
                    } }
                    
                    >
                        
                    </FixedValueInput>
                
            </InputView>
        </FixedValueViewStyle>
    )
};