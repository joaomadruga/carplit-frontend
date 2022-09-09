import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import * as Constants from "../../constants/utils/Constants";
import SwitchPage from "../../views/home/views/carpool/SwitchPage";

const TopTab = createMaterialTopTabNavigator();
const initialRouteName = "AutoValue";

const DefaultPage = () => (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
        <Text>LOADING</Text>
    </View>
  )

export default function SwitchNavigator({ listOfPeople, carpoolPrice }) {
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
                flexGrow: 1
            }}}
            screenListeners={({ navigation, route }) => ({
                state: (e) => {
                    invertIsLeftSected(route.name)
                    setCurrentPageName(route.name)
                },
            })}
            initialRouteName={initialRouteName}
        >
            <TopTab.Screen options={{tabBarLabel: "Valor automático"}} name="AutoValue" component={currentPageName === "AutoValue" ? SwitchPage : DefaultPage} initialParams={{ listOfPeople: listOfPeople, carpoolPrice: carpoolPrice } } />
            <TopTab.Screen options={{tabBarLabel: "Valor fixo"}} name="FixedValue" component={currentPageName === "FixedValue" ? SwitchPage : DefaultPage} initialParams={{ listOfPeople: listOfPeople, carpoolPrice: carpoolPrice } }/>
        </TopTab.Navigator>
    )
}


const screenOptions = {
    tabBarInactiveTintColor: Constants.colors.gray[700],
    tabBarActiveTintColor: Constants.colors.primary[600],
    tabBarStyle: {
        backgroundColor: Constants.colors.gray[0],
        borderRadius: 8,
        elevation: 0,
        marginLeft: 20,
        marginRight: 20
    },
    tabBarLabelStyle: {
        fontFamily: Constants.fontConfig.Body.Medium.FontFamily, 
        fontSize: Constants.fontConfig.Body.Medium.FontSizeInt,
        textTransform: 'none'
    },
    swipeEnabled: false,
}