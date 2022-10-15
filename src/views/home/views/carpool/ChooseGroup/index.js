import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import FlatListChooseGroup from "../../../../../components/choosegroup/FlatListChooseGroup.component";
import ChoosePathContent from "../../../../../components/choosepath/ChoosePathContent.component";
import FlatListChoosePath from "../../../../../components/choosepath/FlatListChoosePath.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import Empty from "../../../../../components/utils/Empty.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import * as Store from "../../../../../redux/store/store";

const getActiveRouteState = function (route) {
    if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
        return route;
    }

    const childActiveRoute = route.routes[route.index];
    return getActiveRouteState(childActiveRoute);
}

export default function ChooseGroup({ navigation, route }) {
    const { loginInfo } = useContext(Store.LoginContext);
    const { selectedPath } = route.params;
    const { listOfRiders } = useContext(Store.HomeContext);
    const [currentRiders, setCurrentRiders] = useState(JSON.parse(JSON.stringify(listOfRiders)));
    const driver = {isDriver: true};
    const activeRoute = getActiveRouteState(navigation.getState());

    useEffect(() => {
        const copyListOfRiders = JSON.parse(JSON.stringify(listOfRiders))
        setCurrentRiders([driver, ...copyListOfRiders]);
    }, [activeRoute.name === "ChooseGroup"]);

    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <View style={{height: '100%', width: '100%'}}>
                    <FlatListChooseGroup listOfRiders={currentRiders} />
                    <ButtonPrimaryDefault
                    title={"Continuar"}
                    onPress={() => { selectedPath['listOfRiders'] = currentRiders, navigation.navigate('AddCarpool', { selectedPath }) }} />
                    
                </View>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}