import { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';
import TouchableListItem from './TouchableListItem.component';

function Item({pathTitle, pathDistance, index, navigation, open, currentItem, setCurrentItem, currentItemId}) {
    return (
        <TouchableListItem
            pathTitle={pathTitle}
            pathDistance={pathDistance}
            index={index}
            open={open}
            setCurrentItem={setCurrentItem}
            currentItem={currentItem}
            currentItemId={currentItemId}
        />
    )
}

export default function ListOfPaths({ listOfPaths, navigation, open, setCurrentItem, ...props }) {
    return (
        <View style={{flex: 1}}>
            {listOfPaths.map((item, index) => {
                return (
                    <Item key={index} pathTitle={item.title} pathDistance={item.totalDistance} index={index} navigation={navigation} open={open} setCurrentItem={setCurrentItem} currentItemId={item._id}/>
                )
            })}
        </View>
    )
}
