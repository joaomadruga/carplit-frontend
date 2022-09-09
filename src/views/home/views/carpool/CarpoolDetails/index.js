import { useContext, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { HeaderText } from "../../../../../components/carpooldetails/HeaderText.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import { CarpoolContext } from "../../../../../routes/homeRoutes/CarpoolRoutes";
import * as Constants from "../../../../../constants/utils/Constants"
import FlatListChooseGroup from "../../../../../components/choosegroup/FlatListChooseGroup.component";
import FlatListAddCarpool from "../../../../../components/addcarpool/FlatListAddCarpool.component";
import ListCarpoolDetails from "../../../../../components/carpooldetails/ListCarpoolDetails.component";

export default function CarpoolDetails({ route }) {
    const { listOfCarpools } = useContext(CarpoolContext);
    const { index } = route.params;
    const { listOfPeople, pathTitle, pathDistance, kmL, gasPrice } = listOfCarpools[index].data[0];
    const [totalPrice, setTotalPrice] = useState(listOfPeople[0].price);
    const { date } = listOfCarpools[index];
    const carpoolPrice = kmL * gasPrice;
    const filterListOfPeople = () => { return listOfPeople.filter((item) => {
        if (item.isParticipating) return item
    }) };
    const [listOfAvailablePeople, setListOfAvailablePeople] = useState(filterListOfPeople());
    return (
        <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
            <PaddingContent>
                <HeaderText carpoolPrice={carpoolPrice} titleText={pathTitle} subtitleText={pathDistance} kmL={kmL}/>
                <ListCarpoolDetails totalPriceState={{ totalPrice, setTotalPrice }} availablePeople={listOfAvailablePeople} carpoolPrice={carpoolPrice}/>
            </PaddingContent>
        </ScrollView>
    );
}