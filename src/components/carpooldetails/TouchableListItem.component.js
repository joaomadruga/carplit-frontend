import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import { Dimensions, Switch, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useContext, useEffect, useState } from 'react';
import BottomLine from '../utils/BottomLine.component';
import { updatePassengerPayment } from '../../helper/carpools/utils';
import * as Store from "../../redux/store/store";

const ViewListItemStyle = styled.View`
    padding: 16px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
`

export default function TouchableListItem({titleText, tripId, subtitleText, index, Person, isDriver, totalPriceState, carpoolPrice , isFixedValue, isOwnerIncluded, passengersLength, ...props}){
    const [checkBox, setCheckBox] = useState(Person.hasPaid || isDriver);
    const [isDisabled, setIsDisabled] = useState(Person.is_driver);
    const { loginInfo } = useContext(Store.HomeContext);
    const { totalPrice, setTotalPrice } = totalPriceState;
    const formattedSubtitleText = Constants.formatter.format(subtitleText);

    const changeTotalPrice = (checkBox) => {
        if (checkBox && !isDriver) {
            setTotalPrice(totalPrice + Person.price);
        } else if (!checkBox && !isDriver) {
            const price = isOwnerIncluded ? carpoolPrice/passengersLength : isFixedValue ? totalPrice : totalPrice/(passengersLength - 1)
            setTotalPrice(totalPrice - price);
        }
    }
    const toggleSwitch = () => { 
        const { _id } = Person;
        setIsDisabled(true);
        setCheckBox(previousState => !previousState);
        const updateInfo = {
            "passenger_id": _id,
            "trip_id": tripId
        }
        const responseUpdateCarpool = (async () => { await updatePassengerPayment(loginInfo.authToken, updateInfo)
        .then((response) => {
            setCheckBox(response.data.passenger.hasPaid);
            changeTotalPrice(!checkBox);
            setIsDisabled(false);
        })
        .catch((error) => {
            console.log(error);
        })})();
    };

    return (
        <>
            <ViewListItemStyle {...props}>
                <View>
                    <Title>{titleText}</Title>
                    <Subtitle>{formattedSubtitleText}</Subtitle>
                </View>
                <Switch
                    onValueChange={toggleSwitch}
                    value={checkBox}
                    trackColor={{ false: "#767577", true: Constants.colors.primary[600] }}
                    thumbColor={checkBox ? Constants.colors.gray[0] : "#f4f3f4"}
                    disabled={isDisabled}
                />
            </ViewListItemStyle>
            <BottomLine/>
        </>
    )
};