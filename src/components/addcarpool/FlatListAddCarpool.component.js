import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import TouchableListItem from './TouchableListItem.component';
import styled from 'styled-components';
import * as Constants from "../../constants/utils/Constants";
import ButtonPrimaryDefault from '../utils/ButtonPrimaryDefault.component';

const Title = styled.Text`
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    color: ${Constants.colors.gray[800]};
    margin-top: 12px;
`

const Subtitle = styled.Text`
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    color: ${Constants.colors.gray[700]};
    margin-top: 4px;
`

const TextView = styled.View`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`
function Item({titleText, splitedPrice, isDriver, isDisabled}) {
    return (
        <TouchableListItem
            titleText={isDriver ? 'Você' : titleText}
            splitedPrice={isDriver && isDisabled ? 0 : splitedPrice}
        />
    )
}

export default function FlatListAddCarpool({ availablePeople, splitedPrice, totalPrice, navigation, isDisabled, carpoolPrice, ...props }) {
    const carpoolPriceFormated = Constants.formatter.format(carpoolPrice);
    const totalPriceFormated = Constants.formatter.format(totalPrice);
    const overPriceFormated = Constants.formatter.format(totalPrice - carpoolPrice);
    return (
        <View style={{flex: 0}}>
            <FlatList
            data={availablePeople}
            renderItem={({ item }) => <Item isDisabled={isDisabled} isDriver={item.isDriver} titleText={item.name} splitedPrice={splitedPrice}/>}
            {...props}
            />
            <TextView>
                <Title>Total a receber</Title>
                <Title>{totalPriceFormated}</Title>
            </TextView>
            <TextView>
                <Subtitle>Custo do roteiro</Subtitle>
                <Subtitle>{carpoolPriceFormated}</Subtitle>
            </TextView>
            <TextView>
                <Subtitle>Saldo da carona</Subtitle>
                <Subtitle>{overPriceFormated}</Subtitle>
            </TextView>
            <ButtonPrimaryDefault marginTop={40} title={"Adicionar carona"} onPress={() => console.log("pressed")} />
        </View>
    )
}
