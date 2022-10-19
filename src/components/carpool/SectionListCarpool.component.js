import { useEffect, useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import DateText from './DateText.component';
import TouchableListItem from './TouchableListItem.component';

function Item({pathTitle, subtitleText, columnIndex, rowIndex, date, navigation}) {
    return (
        <TouchableListItem
            titleText={pathTitle} 
            subtitleText={subtitleText} 
            onPress={() => { navigation.navigate('CarpoolDetails', { columnIndex, rowIndex, date: date})}}
        />
    )
}

export default function SectionListCarpool({ listOfCarpools, navigation, ...props }) {
    return (
        <SectionList
        stickySectionHeadersEnabled={true}
        style={{marginLeft: -20, marginRight: -20, paddingLeft: 20, paddingRight: 20}}
        //here could be switched with index in backend
        sections={listOfCarpools.map((section, index) => ({ ...section, index }))}
        renderItem={({ item, index, section: { index: columnIndex, date } }) => ( 
            <Item
            pathTitle={item?.path?.title} 
            subtitleText={item?.passengers?.length}
            rowIndex={index}
            columnIndex={columnIndex}
            navigation={navigation}
            date={date}
            /> 
            )}
        renderSectionHeader={({ section: { date } }) => <DateText>{date}</DateText>}
        {...props}
        />
    )
}
