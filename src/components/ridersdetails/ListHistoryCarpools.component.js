import { useRef, useState } from 'react';
import { Button, FlatList, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import ButtonPrimaryDefault from '../utils/ButtonPrimaryDefault.component';
import TouchableListItem from './TouchableListItem.component';

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
    margin-top: 32px;
    margin-bottom: 24px;
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    padding: 0 45px;
    text-align: center;
`

function Item({ date, address, price, hasPaid}) {
    return (
        <TouchableListItem
            address={address}
            date={date}
            price={price}
            hasPaid={hasPaid}
        />
    )
}

export default function ListHistoryCarpools({ carpoolHistory, ...props }) {
    const numberOfCarpools = carpoolHistory.length;
    return (
        <View style={{flex: 1}}>
            <Title>{`Histórico de caronas (${numberOfCarpools})`}</Title>
            {
            numberOfCarpools > 0 
            ? carpoolHistory.map((item, index) => {
                return (
                    <Item key={index} date={item.date} address={item.address} hasPaid={item.hasPaid} price={item.price}/>
                )
            })
            : <Subtitle> Essa pessoa ainda não pegou carona com você </Subtitle>
            }
        </View>
    )
}
