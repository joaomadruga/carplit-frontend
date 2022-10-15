import { useContext, useEffect, useRef, useState } from 'react';
import { Button, FlatList, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import ButtonPrimaryDefault from '../utils/ButtonPrimaryDefault.component';
import TouchableListItem from './TouchableListItem.component';
import * as Store from "../../redux/store/store";
import { getHistoryCarpools } from '../../helper/riders/utils';
import Loading from '../utils/Loading.component';

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
    margin-top: 32px;
    margin-bottom: 24px;
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    padding: 0 45px;
    text-align: center;
`

function Item({ navigation, date, address, price, hasPaid, id }) {
    return (
        <TouchableListItem
            address={address}
            date={date}
            price={price}
            hasPaid={hasPaid}
            id={id}
            navigation={navigation}
        />
    )
}

export default function ListHistoryCarpools({ navigation, currentCarpoolHistory, setCurrentCarpoolHistory, id, authToken, ...props }) {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const responseHistoryCarpools = (async () => await getHistoryCarpools(authToken, id)
        .then((response) => {
            setCurrentCarpoolHistory(response.data.trip);
            setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        }))();
    }, []);
    return (
        <View style={{flex: 1}}>
            <Title>{`Histórico de caronas (${currentCarpoolHistory.length})`}</Title>
            {
            !isLoading ?
                currentCarpoolHistory.length > 0 
                ? currentCarpoolHistory.map((item, index) => {
                    const priceFormatted = Constants.formatter.format(item.price)
                    const date = item.data.split(',')[1].trim();
                    return (
                        <Item key={index} date={date} address={item.name_path} id={item.id} hasPaid={item.hasPaid} price={priceFormatted} navigation={navigation}/>
                    )
                })
                : <Subtitle> Essa pessoa ainda não pegou carona com você </Subtitle>
            : <Loading />
            }
        </View>
    )
}
