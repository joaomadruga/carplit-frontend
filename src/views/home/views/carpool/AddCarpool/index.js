import { useCallback, useContext, useEffect, useState } from "react";
import { HeaderText } from "../../../../../components/addcarpool/HeaderText.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SwitchButton } from "../../../../../components/addcarpool/SwitchButton.component";
import SwitchPage from "./SwitchPage";
import * as Constants from "../../../../../constants/utils/Constants";
import * as Store from "../../../../../redux/store/store";
import { CommonActions } from "@react-navigation/native";


export default function AddCarpool({ navigation, route }) {
    const { listOfCarpools, setListOfCarpools } = useContext(Store.CarpoolContext);
    const { selectedPath } = route.params;
    const { loginInfo } = useContext(Store.LoginContext);
    const { listOfRiders, title, totalDistance, _id } = selectedPath;
    const [isLeftSelected, setIsLeftSelected] = useState(true);
    const consumePath = (totalDistance / loginInfo.averageConsumption).toFixed(2);
    const carpoolPrice = (loginInfo.fuelPerLiter * consumePath).toFixed(2);

    return (
        <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
            <PaddingContent>
                <HeaderText carpoolPrice={carpoolPrice} titleText={title} subtitleText={totalDistance} consumePath={consumePath}/>
                <SwitchButton isLeftSelectedState={{isLeftSelected: isLeftSelected, setIsLeftSelected: setIsLeftSelected}}/>
                <SwitchPage props={{ carpoolPrice, listOfCarpools, setListOfCarpools, tempListOfRiders: listOfRiders, isLeftSelected, loginInfo, title, totalDistance, navigation, pathId: _id }}/>
            </PaddingContent>
        </ScrollView>
    );
}