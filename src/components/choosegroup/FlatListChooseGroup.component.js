import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import TouchableListItem from './TouchableListItem.component';

function Item({name, address}) {
    return (
        <TouchableListItem
            titleText={name} 
            subtitleText={address} 
        />
    )
}

export default function FlatListChooseGroup({ listOfPeople, ...props }) {
    return (
        <FlatList
        style={{maxHeight: '85%'}}
        data={listOfPeople}
        renderItem={({ item }) => <Item name={item.name} address={item.address}/>}
        {...props}
        />
    )
}
