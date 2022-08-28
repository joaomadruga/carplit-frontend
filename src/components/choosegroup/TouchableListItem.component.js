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
    color: ${Constants.colors.gray[800]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    max-width: 90%;
`

export default function TouchableListItem({titleText, subtitleText, index, stateCheckboxValues,  ...props}){
    const {checkboxValues, setCheckboxValues} = stateCheckboxValues;
    return (
        <>
            <TouchableListItemStyle {...props}>
                <View>
                    <Title>{titleText}</Title>
                    <Subtitle>{subtitleText}</Subtitle>
                </View>
                <Checkbox.Android
                    status={checkboxValues[index] ? 'checked' : 'unchecked'}
                    onPress={() => {
                        const tempArray = [...checkboxValues]
                        tempArray[index] = !tempArray[index]
                        setCheckboxValues(tempArray)
                    }}
                    centered={true}
                />
            </TouchableListItemStyle>
            <BottomLine/>
        </>
    )
};