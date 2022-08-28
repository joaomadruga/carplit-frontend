import { Text, View, Switch } from "react-native";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../../components/utils/SafeAreaViewLogin.component";
import { useState } from "react";
import AutoValueView from "../../../../../../components/addcarpool/AutoValueView.component";

export default function AutoValue({ navigation, route }) {
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <AutoValueView>Se incluir na divisão de custos</AutoValueView>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}