import { Text, View, Switch } from "react-native";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../../components/utils/SafeAreaViewLogin.component";
import { useEffect, useState } from "react";
import AutoValueView from "../../../../../../components/addcarpool/AutoValueView.component";
import { useRoute } from "@react-navigation/native";
import FlatListAddCarpool from "../../../../../../components/addcarpool/FlatListAddCarpool.component";

export default function AutoValue({ navigation, route }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const { listOfPeople, carpoolPrice } = route.params;
    const filterListOfPeople = () => { return listOfPeople.filter((item) => {
        if (item.isParticipating || item.isDriver) return item
    }) }
    const [availablePeople, setAvailablePeople] = useState(filterListOfPeople())
    const [splitedPrice, setSplitedPrice] = useState(carpoolPrice/(availablePeople.length - 1))
    
    useEffect(() => {
        let quantityOfPerson = availablePeople.length;

        if (isEnabled) {
            setSplitedPrice(carpoolPrice/quantityOfPerson)
        } else {
            if (quantityOfPerson === 1) quantityOfPerson += 1
            setSplitedPrice(carpoolPrice/(quantityOfPerson - 1))
        }
    }, [isEnabled])
    return (
        <PaddingContent>
            <AutoValueView isEnabledState={{ isEnabled, setIsEnabled }}>Se incluir na divisão de custos</AutoValueView>
            <FlatListAddCarpool totalPrice={carpoolPrice} carpoolPrice={carpoolPrice} isDisabled={!isEnabled} availablePeople={availablePeople} splitedPrice={splitedPrice}/>
        </PaddingContent>
    );
}