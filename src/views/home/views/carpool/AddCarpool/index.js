import { useCallback, useEffect, useState } from "react";
import { HeaderText } from "../../../../../components/addcarpool/HeaderText.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SwitchButton } from "../../../../../components/addcarpool/SwitchButton.component";
import SwitchPage from "./SwitchPage";
import * as Constants from "../../../../../constants/utils/Constants";

const gasPrice = 5.5;


export default function AddCarpool({ route }) {
    const { listOfPeople, pathTitle, pathDistance, kmL } = route.params;
    const [isLeftSelected, setIsLeftSelected] = useState(true);
    const carpoolPrice = kmL * gasPrice;
    return (
        <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
            <PaddingContent>
                <HeaderText carpoolPrice={carpoolPrice} titleText={pathTitle} subtitleText={pathDistance} kmL={kmL}/>
                <SwitchButton isLeftSelectedState={{isLeftSelected: isLeftSelected, setIsLeftSelected: setIsLeftSelected}}/>
                <SwitchPage carpoolPrice={carpoolPrice} listOfPeople={listOfPeople} isLeftSelected={isLeftSelected}/>
                <ButtonPrimaryDefault marginTop={43} marginBottom={30} title={"Adicionar carona"} onPress={() => console.log("pressed")} />
            </PaddingContent>
        </ScrollView>
    );
}