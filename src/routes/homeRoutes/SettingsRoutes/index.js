import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { TouchableWithoutFeedback } from "react-native";
import ImageWrapper from "../../../components/utils/ImageWrapper.component";
import ConsumeFuel from "../../../views/home/views/settings/ConsumeFuel";
import ArrowLeft from "../../../../assets/Button/arrow-left.png";
import * as Constants from "../../../constants/utils/Constants";
import { tabBarStyle } from "..";
import SettingsScreen from "../../../views/home/views/settings";
import AddIcon from "../../../../assets/Home/add-icon.png";

const StackSettings = createNativeStackNavigator();

export const SettingNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName && routeName !== "SettingsScreen"){
            navigation.setOptions({tabBarStyle: { display: 'none' }});
        } else {
            navigation.setOptions({tabBarStyle: { display: 'flex', ...tabBarStyle}});
        }
    }, [navigation, route]);

    return (
        <StackSettings.Navigator screenOptions={screenOptions} initialRouteName='SettingsScreen'>
                <StackSettings.Screen options={{headerShown: false}} name="SettingsScreen" component={SettingsScreen} />
                <StackSettings.Screen options={({ navigation }) => ({
              headerTitle: 'Consumo e combustível',
              title: 'Consumo e combustível',
              headerLeft: () =>  ( 
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
              </TouchableWithoutFeedback>
              )
            })}
              
            name="ConsumeFuel" 
            component={ConsumeFuel} />
        </StackSettings.Navigator>
    )
}

const screenOptions = {
    headerTintColor: 'black',
    headerBackTitleVisible: false,
    headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold, margin:'200px' },
    headerStyle: {
        backgroundColor: Constants.headerStyleConfig.BackgroundColor
    },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    gestureEnabled: true,
    gestureDirection: "horizontal",
    animation: "slide_from_right"
}