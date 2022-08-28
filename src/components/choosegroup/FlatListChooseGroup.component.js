import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import TouchableListItem from './TouchableListItem.component';

function Item({name, address, index, stateCheckboxValues}) {
    return (
        <TouchableListItem
            titleText={name} 
            subtitleText={address} 
            index={index}
            stateCheckboxValues={stateCheckboxValues}
        />
    )
}

export default function FlatListChooseGroup({ listOfPeople, stateCheckboxValues, ...props }) {
    return (
        <FlatList
        style={{maxHeight: '85%'}}
        data={listOfPeople}
        renderItem={({ item, index }) => <Item stateCheckboxValues={stateCheckboxValues} name={item.name} address={item.address} index={index}/>}
        {...props}
        />
    )
}
