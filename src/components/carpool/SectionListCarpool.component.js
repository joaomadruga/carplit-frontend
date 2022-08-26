import { useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import DateText from './DateText.component';
import TouchableListItem from './TouchableListItem.component';

function Item({titleText, subtitleText, date, navigation}) {
    return (
        <TouchableListItem
            titleText={titleText} 
            subtitleText={subtitleText} 
            onPress={() => { navigation.navigate('CarpoolDetails', { titleText: titleText, date: date } )  }}
        />
    )
}

export default function SectionListCarpool({ listOfCarpools, navigation, ...props }) {
    return (
        <SectionList
        sections={listOfCarpools}
        stickySectionHeadersEnabled={true}
        renderItem={({ item, section: { date } }) => <Item titleText={item.titleText} subtitleText={item.subtitleText} date={date} navigation={navigation}/>}
        renderSectionHeader={({ section: { date } }) => <DateText>{date}</DateText>}
        {...props}
        />
    )
}
