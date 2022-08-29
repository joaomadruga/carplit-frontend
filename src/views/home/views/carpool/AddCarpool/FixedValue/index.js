import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import FixedValueView from "../../../../../../components/addcarpool/FixedValueView.component";
import FlatListAddCarpool from "../../../../../../components/addcarpool/FlatListAddCarpool.component";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../../components/utils/SafeAreaViewLogin.component";

export default function FixedValue({ navigation, route }) {
    const { listOfPeople, carpoolPrice } = route.params;
    const filterListOfPeople = () => { return listOfPeople.filter((item) => {
        if (item.isParticipating || item.isDriver) return item
    }) }
    const [availablePeople, setAvailablePeople] = useState(filterListOfPeople())
    const [fixedPrice, setFixedPrice] = useState("R$ 0,00")
    const totalPrice = fixedPrice.replace(/[$a-zA-Z.]/g, '').replace(',', '.') * (availablePeople.length - 1);
    
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <View>
                    <FixedValueView fixedPriceState={{fixedPrice, setFixedPrice}}/>
                    <FlatListAddCarpool carpoolPrice={carpoolPrice} totalPrice={totalPrice} availablePeople={availablePeople} isDisabled={true} splitedPrice={fixedPrice}/>
                </View>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}