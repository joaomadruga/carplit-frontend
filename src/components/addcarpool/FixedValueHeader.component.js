import { useEffect, useRef, useState } from 'react';
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
    margin: 16px 0;
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
    direction: rtl;
    unicode-bidi: bidi-override;
`

const InputView = styled.View`
    background-color: ${Constants.colors.gray[100]};
    padding: 16px 8px;
    border-radius: 8px;

`

export default function FixedValueHeader({ fixedPriceState }){
    const {fixedPrice, setFixedPrice} = fixedPriceState;
    return (
        <FixedValueViewStyle>
            <FixedValueText>Valor fixo</FixedValueText>
            <InputView>
                    <FixedValueInput
                    keyboardType={"numeric"} 
                    value={fixedPrice}
                    onChangeText={(value) => {
                        const valueFiltered = value.replace(',', '.').replace(/[^0-9]/g, '');
                        setFixedPrice(Constants.inputFormatter(valueFiltered));
                    }}
                    autoFocus={true}
                    />
            </InputView>
        </FixedValueViewStyle>
    )
};