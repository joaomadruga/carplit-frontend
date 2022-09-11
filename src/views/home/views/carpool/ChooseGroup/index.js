import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import FlatListChooseGroup from "../../../../../components/choosegroup/FlatListChooseGroup.component";
import ChoosePathContent from "../../../../../components/choosepath/ChoosePathContent.component";
import FlatListChoosePath from "../../../../../components/choosepath/FlatListChoosePath.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import Empty from "../../../../../components/utils/Empty.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import { HomeContext } from "../../../../../routes/homeRoutes";
import { CarpoolContext } from "../../../../../routes/homeRoutes/CarpoolRoutes";

export default function ChooseGroup({ navigation, route }) {
    const { selectedPath } = route.params;
    const { listOfRiders } = useContext(HomeContext);
    const [currentRiders, setCurrentRiders] = useState(JSON.parse(JSON.stringify(listOfRiders)));
    //navigation.navigate('AddCarpool', { selectedPath })
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <View style={{height: '100%', width: '100%'}}>
                    <FlatListChooseGroup listOfRiders={currentRiders} />
                    <ButtonPrimaryDefault
                    title={"Continuar"}
                    onPress={() => { selectedPath.data[0].listOfRiders = currentRiders, navigation.navigate('AddCarpool', { selectedPath }) }} />
                    
                </View>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}