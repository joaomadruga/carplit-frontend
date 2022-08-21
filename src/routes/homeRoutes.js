import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Image, Text, TouchableWithoutFeedback } from "react-native";
import * as Constants from "../constants/utils/Constants";
import SettingsScreen from "../views/settings";
import ImageWrapper from "../components/utils/ImageWrapper.component";
import CarIconInactive from "../../assets/Home/car-icon-inactive.png";
import CarIconActive from "../../assets/Home/car-icon-active.png";
import SettingsIconInactive from "../../assets/Home/user-settings-icon-inactive.png";
import SettingsIconActive from "../../assets/Home/user-settings-icon-active.png";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Carpool from '../views/home/views/carpool';
import Finance from '../views/home/views/finance';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopNavigator = () => {
    return (
        <TopTab.Navigator screenOptions={{
            tabBarInactiveTintColor: Constants.colors.gray[600],
            tabBarActiveTintColor: Constants.colors.primary[600], 
            tabBarIndicatorStyle: {backgroundColor: Constants.colors.primary[600]}
            }}>
            <TopTab.Screen name="Carpool" component={Carpool} />
            <TopTab.Screen name="Finance" component={Finance} />
        </TopTab.Navigator>
    )
}


export default function HomeRoutes() {
  return (
        <Tab.Navigator screenOptions={screenOptions}>
            
            <Tab.Screen name="Home" 
                component={TopNavigator}
                options={() => ({
                    headerTitle: 'Início',
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ focused }) => (
                    <TouchableWithoutFeedback>
                        <ImageWrapper source={focused ? CarIconActive : CarIconInactive} width={'24px'} height={'24px'}/>
                    </TouchableWithoutFeedback>
                    )
                })}
            />

            <Tab.Screen name="Settings" component={SettingsScreen} 
                options={() => ({
                    headerTitle: 'Ajustes',
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ focused }) => (
                        <TouchableWithoutFeedback>
                            <ImageWrapper source={focused ? SettingsIconActive: SettingsIconInactive} width={'24px'} height={'24px'}/>
                        </TouchableWithoutFeedback>
                        )
                })}
            />
        </Tab.Navigator>
  );
}

const screenOptions = {
    headerTintColor: 'black',
    headerBackTitleVisible: false,
    headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold },
    headerStyle: { backgroundColor: Constants.headerStyleConfig.BackgroundColor },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    tabBarInactiveTintColor: Constants.colors.gray[600],
    tabBarActiveTintColor: Constants.colors.primary[600]
}