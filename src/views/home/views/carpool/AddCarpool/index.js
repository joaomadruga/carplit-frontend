import { useCallback, useContext, useEffect, useState } from "react";
import { HeaderText } from "../../../../../components/addcarpool/HeaderText.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SwitchButton } from "../../../../../components/addcarpool/SwitchButton.component";
import SwitchPage from "./SwitchPage";
import * as Constants from "../../../../../constants/utils/Constants";
import { CarpoolContext } from "../../../../../routes/homeRoutes/CarpoolRoutes";
import { CommonActions } from "@react-navigation/native";


export default function AddCarpool({ navigation, route }) {
    const { setListOfCarpools } = useContext(CarpoolContext);
    const { selectedPath } = route.params;
    const { listOfPeople, pathTitle, pathDistance, kmL, gasPrice } = selectedPath.data[0];
    const [isLeftSelected, setIsLeftSelected] = useState(true);
    const carpoolPrice = kmL * gasPrice;

    return (
        <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
            <PaddingContent>
                <HeaderText carpoolPrice={carpoolPrice} titleText={pathTitle} subtitleText={pathDistance} kmL={kmL}/>
                <SwitchButton isLeftSelectedState={{isLeftSelected: isLeftSelected, setIsLeftSelected: setIsLeftSelected}}/>
                <SwitchPage props={{ carpoolPrice, setListOfCarpools, listOfPeople, isLeftSelected, gasPrice, kmL, pathTitle, pathDistance, navigation }}/>
            </PaddingContent>
        </ScrollView>
    );
}