import { Text, View } from "react-native";
import FixedValueView from "../../../../../../components/addcarpool/FixedValueView.component";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../../components/utils/SafeAreaViewLogin.component";

export default function FixedValue({ navigation, route }) {
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <FixedValueView />
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}