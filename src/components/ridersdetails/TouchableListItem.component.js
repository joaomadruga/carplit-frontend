import styled from 'styled-components/native';
import { Dimensions, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useEffect, useState } from 'react';
import BottomLine from '../utils/BottomLine.component';
import * as Constants from '../../constants/utils/Constants';
import ArrowRight from '../../../assets/Button/arrow-right.png';
import ImageWrapper from '../utils/ImageWrapper.component';

const TouchableListItemStyle = styled.TouchableOpacity`
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.Text`
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    color: ${Constants.colors.gray[700]};
    max-width: 90%;
`

export default function TouchableListItem({ date, address, price, hasPaid, ...props}){
    return (
        <>
            <TouchableListItemStyle {...props}>
                <View>
                    <ItemText>{date}</ItemText>
                    <ItemText>{address}</ItemText>
                    <ItemText>{price === 0 ? "Sem cobrança" : hasPaid ? `${price} (Pago)` : `${price} (Não pago)`}</ItemText>
                </View>
                <ImageWrapper source={ArrowRight} width={24} height={24} />
            </TouchableListItemStyle>
                <BottomLine/>
        </>
    )
};