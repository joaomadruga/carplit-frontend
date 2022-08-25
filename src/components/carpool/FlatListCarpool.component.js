import { useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import DateText from './DateText.component';
import TouchableListItem from './TouchableListItem.component';

const FlatListCarpoolStyle = styled.FlatList`

`;

function Item({titleText, subtitleText}) {
    return <TouchableListItem titleText={titleText} subtitleText={subtitleText} />
}

export default function FlatListCarpool({ listOfCarpools, ...props }) {
    const [DateObject, setDateObject] = useState({})
    //console.log(listOfCarpools)
    return (
        <SectionList
        sections={listOfCarpools}
        stickySectionHeadersEnabled={true}
        renderItem={({ item }) => <Item titleText={item.titleText} subtitleText={item.subtitleText} />}
        renderSectionHeader={({ section: { date } }) => <DateText>{date}</DateText>}
        {...props}
        />
    )
}
