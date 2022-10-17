import styled from 'styled-components/native';
import { Dimensions, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useContext, useEffect, useState } from 'react';
import BottomLine from '../utils/BottomLine.component';
import * as Constants from '../../constants/utils/Constants';
import * as Store from "../../redux/store/store";
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
    padding-right: 10%;
`

export default function TouchableListItem({ navigation, date, address, price, hasPaid, id, ...props}){
    const { listOfCarpools } = useContext(Store.HomeContext);
    const columnAndRowIndex = {};
    const currentCarpool = listOfCarpools.map((carpool, columnIndex) => {
        return carpool.data.filter((item, rowIndex) => {
            if (item._id === id) {
                columnAndRowIndex['columnIndex'] = columnIndex;
                columnAndRowIndex['rowIndex'] = rowIndex;
                return item;
            }
        });
    });
    return (
        <>
            <TouchableListItemStyle {...props} onPress={() => { navigation.navigate('CarpoolDetailsRiders', { columnIndex: columnAndRowIndex.columnIndex, rowIndex: columnAndRowIndex.rowIndex, date }) }}>
                <View style={{maxWidth: '90%'}}>
                    <ItemText>{date}</ItemText>
                    <ItemText>{address}</ItemText>
                    <ItemText>{price === 0 ? "Sem cobrança" : hasPaid ? `${price} (Pago)` : `${price} (Não pago)`}</ItemText>
                </View>
                <ImageWrapper source={ArrowRight} width={'24px'} height={'24px'} />
            </TouchableListItemStyle>
                <BottomLine/>
        </>
    )
};