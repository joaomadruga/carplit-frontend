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

function Item({name, price, tripId, index, Person, isDriver, totalPriceState, carpoolPrice, isFixedValue, isOwnerIncluded, passengersLength}) {
    return (
        <TouchableListItem
            titleText={isDriver ? "Você" : name}
            subtitleText={price}
            index={index}
            Person={Person}
            isDriver={isDriver}
            totalPriceState={totalPriceState}
            isFixedValue={isFixedValue}
            isOwnerIncluded={isOwnerIncluded}
            passengersLength={passengersLength}
            carpoolPrice={carpoolPrice}
            tripId={tripId}
        />
    )
}

export default function ListCarpoolDetails({ availablePeople, tripId, totalPriceState, carpoolPrice, isFixedValue, isOwnerIncluded, ...props }) {
    const { totalPrice, setTotalPrice } = totalPriceState;
    const overPrice = totalPrice - carpoolPrice;
    const carpoolPriceFormated = Constants.formatter.format(carpoolPrice);
    const totalPriceFormated = Constants.formatter.format(totalPrice);
    const overPriceFormated = Constants.formatter.format(overPrice);
    const passengersLength = availablePeople.length;
    return (
        <View style={{flex: 1}}>
            {availablePeople.map((item, index) => {
                return (
                    <Item key={index} tripId={tripId} carpoolPrice={carpoolPrice} passengersLength={passengersLength} isFixedValue={isFixedValue} isOwnerIncluded={isOwnerIncluded} isDriver={item.is_driver} Person={item} name={item.name} price={item.price} index={index} totalPriceState={totalPriceState}/>
                )
            })}
            <TextView>
                <View>
                    <Title>Total recebido</Title>
                    <Subtitle>{totalPriceFormated} de {carpoolPriceFormated}</Subtitle>
                </View>
                <View>
                    <Title>Saldo da carona</Title>
                    <Subtitle style={{textAlign: 'right'}}>{overPrice > 0 ? `+ ${overPriceFormated}` : overPriceFormated.replace('-', '- ')}</Subtitle>
                </View>
            </TextView>
        </View>
    )
}
