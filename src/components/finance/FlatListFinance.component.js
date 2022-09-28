import { useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import TouchableListItem from './TouchableListItem.component';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';

function Item({name, owePrice, navigation, index}) {
    return (
        <TouchableListItem
            titleText={name} 
            subtitleText={owePrice} 
            onPress={() => {navigation.navigate('HomeRoutes', {screen: 'Settings', initial: false, params:  { screen: 'RidersNavigator', initial: false, params: { screen: 'RidersDetails', initial: false, params: {name, index} } } })}}
        />
    )
}

export default function FlatListFinance({ listOfRiders, navigation, ...props }) {
    const windowWidth = Dimensions.get('window').width;
    return (
        <FlatList
        data={listOfRiders}
        style={{backgroundColor: Constants.colors.gray[100], width: windowWidth, marginLeft: -20}}
        renderItem={({ item, index }) => {
            return (
                 <Item key={index} name={item.name} owePrice={item.price} navigation={navigation} index={index}/>
            )}}
        {...props}
        />
    )
}
