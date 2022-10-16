import { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';
import TouchableListItem from './TouchableListItem.component';

function Item({name, index, navigation, id}) {
    return (
        <TouchableListItem
            name={name}
            index={index}
            onPress={() => {navigation.navigate('RidersDetails', {name, index, id})}}
        />
    )
}

export default function ListOfRiders({ listOfRiders, navigation, ...props }) {
    return (
        <View style={{flex: 1}}>
            {listOfRiders.map((item, index) => {
                return (
                    <Item key={index} name={item.name} index={index} navigation={navigation} id={item._id}/>
                )
            })}
        </View>
    )
}
