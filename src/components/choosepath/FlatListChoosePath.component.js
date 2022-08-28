import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import TouchableListItem from './TouchableListItem.component';

function Item({titleText, subtitleText, kmL, navigation}) {
    return (
        <TouchableListItem
            titleText={titleText} 
            subtitleText={subtitleText} 
            onPress={() => { navigation.navigate('ChooseGroup', {pathTitle: titleText, pathDistance: subtitleText, kmL: kmL}) }}
        />
    )
}

export default function FlatListChoosePath({ listOfPaths, navigation, ...props }) {
    return (
        <FlatList
        data={listOfPaths}
        renderItem={({ item }) => <Item titleText={item.titleText} subtitleText={item.subtitleText} kmL={item.kmL} navigation={navigation} />}
        {...props}
        />
    )
}
