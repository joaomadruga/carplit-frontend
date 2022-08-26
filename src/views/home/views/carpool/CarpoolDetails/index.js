import { Text } from "react-native";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";


export default function CarpoolDetails({ route, navigation }) {
    const { titleText, date } = route.params;
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                    <Text>{date}</Text>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}