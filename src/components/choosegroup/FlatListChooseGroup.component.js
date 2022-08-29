import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import TouchableListItem from './TouchableListItem.component';

function Item({name, address, index, People, isDriver}) {
    return (
        <TouchableListItem
            titleText={isDriver ? "Você" : name} 
            subtitleText={address}
            index={index}
            People={People}
        />
    )
}

export default function FlatListChooseGroup({ listOfPeople, ...props }) {
    return (
        <FlatList
        style={{maxHeight: '85%'}}
        data={listOfPeople}
        renderItem={({ item, index }) => <Item isDriver={item.isDriver} People={item} name={item.name} address={item.address} index={index}/>}
        {...props}
        />
    )
}
