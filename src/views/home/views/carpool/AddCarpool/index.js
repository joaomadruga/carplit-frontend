import { useCallback, useEffect, useState } from "react";
import { HeaderText } from "../../../../../components/addcarpool/HeaderText.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import SwitchNavigator from "../../../../../components/addcarpool/SwitchNavigator.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";

const gasPrice = 7;


export default function AddCarpool({ route }) {
    const { listOfPeople, pathTitle, pathDistance, kmL } = route.params;
    const carpoolPrice = kmL * gasPrice;
    useEffect(() => {
        console.log(pathTitle, pathDistance, kmL)
    }, [])
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <HeaderText carpoolPrice={carpoolPrice} titleText={pathTitle} subtitleText={pathDistance} kmL={kmL}/>
                <SwitchNavigator carpoolPrice={carpoolPrice} listOfPeople={listOfPeople}/>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}