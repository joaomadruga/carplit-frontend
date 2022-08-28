import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState } from "react";
import * as Constants from "../../constants/utils/Constants";
import AutoValue from "../../views/home/views/carpool/AddCarpool/AutoValue";
import FixedValue from "../../views/home/views/carpool/AddCarpool/FixedValue";

const TopTab = createMaterialTopTabNavigator();
const initialRouteName = "AutoValue";

export default function SwitchNavigator() {
    const [isLeftSelected, setIsLeftSected] = useState(true);
    const [currentPageName, setCurrentPageName] = useState(initialRouteName);
    const invertIsLeftSected = (targetSelection) => { if (targetSelection !== currentPageName) setIsLeftSected(!isLeftSelected)};
    
    return (
        <TopTab.Navigator 
            screenOptions={{...screenOptions, tabBarIndicatorStyle: {
                backgroundColor: Constants.colors.primary[200], 
                height: '100%',
                borderTopLeftRadius: isLeftSelected ? 8 : 0,
                borderBottomLeftRadius: isLeftSelected ? 8 : 0,
                borderTopRightRadius: isLeftSelected ? 0 : 8,
                borderBottomRightRadius: isLeftSelected ? 0 : 8,
            }}}
            screenListeners={({ navigation, route }) => ({
                state: (e) => {
                    invertIsLeftSected(route.name)
                    setCurrentPageName(route.name)
                },
            })}
            initialRouteName={initialRouteName}
        >
            <TopTab.Screen options={{tabBarLabel: "Valor automático"}} name="AutoValue" component={AutoValue} />
            <TopTab.Screen options={{tabBarLabel: "Valor fixo"}} name="FixedValue" component={FixedValue} />
        </TopTab.Navigator>
    )
}


const screenOptions = {
    tabBarInactiveTintColor: Constants.colors.gray[700],
    tabBarActiveTintColor: Constants.colors.primary[600],
    tabBarStyle: {
        backgroundColor: Constants.colors.gray[0],
        borderRadius: 8,
        elevation: 0
    },
    tabBarLabelStyle: {
        fontFamily: Constants.fontConfig.Body.Medium.FontFamily, 
        fontSize: Constants.fontConfig.Body.Medium.FontSizeInt,
        textTransform: 'none'
    },
    swipeEnabled: false,
}