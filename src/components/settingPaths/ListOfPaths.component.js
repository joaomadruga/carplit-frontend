import { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';
import TouchableListItem from './TouchableListItem.component';

function Item({pathTitle, pathDistance, index, navigation, open, setCurrentItemIndex}) {
    return (
        <TouchableListItem
            pathTitle={pathTitle}
            pathDistance={pathDistance}
            index={index}
            open={open}
            setCurrentItemIndex={setCurrentItemIndex}
            //onPress={() => {navigation.navigate('PathsDetails', {pathTitle, index})}}
        />
    )
}

export default function ListOfPaths({ listOfPaths, navigation, open, setCurrentItemIndex, ...props }) {
    return (
        <View style={{flex: 1}}>
            {listOfPaths.map((item, index) => {
                return (
                    <Item key={index} pathTitle={item.pathTitle} pathDistance={item.pathDistance} index={index} navigation={navigation} open={open} setCurrentItemIndex={setCurrentItemIndex}/>
                )
            })}
        </View>
    )
}
