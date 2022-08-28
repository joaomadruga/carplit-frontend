import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import { Dimensions, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import BottomLine from '../utils/BottomLine.component';

const TouchableListItemStyle = styled.View`
    padding: 16px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[700]};
`

export default function TouchableListItem({titleText, splitedPrice, ...props}){
    const formatedValue = Constants.formatter.format(splitedPrice);
    
    return (
        <>
            <TouchableListItemStyle {...props}>
                <Title>{titleText}</Title>
                <Title>{formatedValue.includes('NaN') ? splitedPrice : formatedValue}</Title>
            </TouchableListItemStyle>
            <BottomLine/>
        </>
    )
};