import { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import ButtonPrimaryDefault from '../utils/ButtonPrimaryDefault.component';
import TouchableListItem from './TouchableListItem.component';

const Title = styled.Text`
    font-size: ${Constants.fontConfig.Xsm.Bold.FontSize};
    font-family: ${Constants.fontConfig.Xsm.Bold.FontFamily};
    color: ${Constants.colors.gray[600]};
`

const Subtitle = styled.Text`
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
    color: ${Constants.colors.gray[800]};
`

const TextView = styled.View`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex: 1;
    margin: 24px 0;
`

function Item({name, address, index, People, isDriver, totalPriceState}) {
    return (
        <TouchableListItem
            titleText={isDriver ? "Você" : name} 
            subtitleText={address}
            index={index}
            People={People}
            totalPriceState={totalPriceState}
        />
    )
}

export default function ListCarpoolDetails({ availablePeople, totalPriceState, carpoolPrice, ...props }) {
    const { totalPrice, setTotalPrice } = totalPriceState;
    const carpoolPriceFormated = Constants.formatter.format(carpoolPrice);
    const totalPriceFormated = Constants.formatter.format(totalPrice);
    const overPriceFormated = Constants.formatter.format(totalPrice - carpoolPrice);
    return (
        <View style={{flex: 1}}>
            {availablePeople.map((item, index) => {
                return (
                    <Item key={index} isDriver={item.isDriver} People={item} name={item.name} address={item.address} index={index} totalPriceState={totalPriceState}/>
                )
            })}
            <TextView>
                <View>
                    <Title>Total recebido</Title>
                    <Subtitle>{totalPriceFormated} de {carpoolPriceFormated}</Subtitle>
                </View>
                <View>
                    <Title>Saldo da carona</Title>
                    <Subtitle>{overPriceFormated > 0 ? `+${overPriceFormated}` : overPriceFormated}</Subtitle>
                </View>
            </TextView>
        </View>
    )
}
