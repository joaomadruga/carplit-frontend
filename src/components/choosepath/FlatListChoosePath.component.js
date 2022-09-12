import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import TouchableListItem from './TouchableListItem.component';

function Item({pathTitle, pathDistance, navigation, listOfPaths, index}) {
    const currentPath = JSON.parse(JSON.stringify(listOfPaths[index]));
    return (
        <TouchableListItem
            titleText={pathTitle} 
            subtitleText={pathDistance} 
            onPress={() => { navigation.navigate('ChooseGroup', { selectedPath: currentPath })}}
        />
    )
}

export default function FlatListChoosePath({ listOfPaths, navigation, ...props }) {
    return (
        <FlatList
        data={listOfPaths}
        renderItem={({ item, index }) => { return (
        item.data.map((carpoolItem, carpoolIndex) => {
           return <Item key={carpoolIndex} pathTitle={carpoolItem.pathTitle} pathDistance={carpoolItem.pathDistance} navigation={navigation} index={index} listOfPaths={listOfPaths}/>             
        })
        )}}
        {...props}
        />
    )
}
