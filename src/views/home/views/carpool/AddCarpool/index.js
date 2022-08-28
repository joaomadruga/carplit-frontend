import { useCallback, useEffect, useState } from "react";
import { HeaderText } from "../../../../../components/addcarpool/HeaderText.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import SwitchNavigator from "../../../../../components/addcarpool/SwitchNavigator.component";

export default function AddCarpool({ route }) {
    const { checkboxValues, pathTitle, pathDistance } = route.params;
    useEffect(() => {
        console.log(pathTitle, pathDistance)
    }, [])
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <HeaderText titleText={pathTitle} subtitleText={pathDistance}/>
                <SwitchNavigator/>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}