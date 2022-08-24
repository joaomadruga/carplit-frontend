import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Image, Text, TouchableWithoutFeedback } from "react-native";
import * as Constants from "../constants/utils/Constants";
import SettingsScreen from "../views/settings";
import ImageWrapper from "../components/utils/ImageWrapper.component";
import CarIconInactive from "../../assets/Home/car-icon-inactive.png";
import CarIconActive from "../../assets/Home/car-icon-active.png";
import WalletIconInactive from "../../assets/Home/wallet-finance-icon-inactive.png";
import WalletIconActive from "../../assets/Home/wallet-finance-icon-active.png";
import SettingsIconInactive from "../../assets/Home/user-settings-icon-inactive.png";
import SettingsIconActive from "../../assets/Home/user-settings-icon-active.png";
import ArrowLeft from "../../assets/Button/arrow-left.png";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Carpool from '../views/home/views/carpool';
import Finance from '../views/home/views/finance';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConsumeFuel from '../views/settings/ConsumeFuel';
import { useLayoutEffect, useState } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
//const TopTab = createMaterialTopTabNavigator();
const StackSettings = createNativeStackNavigator();

/*
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
*/

const SettingNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName && routeName !== "SettingsScreen"){
            navigation.setOptions({tabBarStyle: { display: 'none' }});
        } else {
            navigation.setOptions({tabBarStyle: { display: 'flex', ...tabBarStyle}});
        }
    }, [navigation, route]);

    return (
        <StackSettings.Navigator screenOptions={screenOptionsStackNavigator} initialRouteName='SettingsScreen'>
                <StackSettings.Screen options={{headerShown: false}} name="SettingsScreen" component={SettingsScreen} />
                <StackSettings.Screen options={({ navigation }) => ({
              headerTitle: 'Entrar',
              title: 'Entrar',
              headerLeft: () =>  ( 
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <ImageWrapper style={{cursor: 'pointer'}} width={'48px'} height={'48px'} source={ArrowLeft} />
              </TouchableWithoutFeedback>
              )
            })}
              
            name="ConsumeFuel" 
            component={ConsumeFuel} />
        </StackSettings.Navigator>
    )
}

export default function HomeRoutes() {
  const insets = useSafeAreaInsets();
  return (
        <Tab.Navigator screenOptions={{...screenOptions, tabBarStyle: tabBarStyle}}>
            
            <Tab.Screen name="Home" 
                component={Carpool}
                options={() => ({
                    headerTitle: 'Início',
                    tabBarLabel: 'Início',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                    <TouchableWithoutFeedback>
                        <ImageWrapper source={focused ? CarIconActive : CarIconInactive} width={'24px'} height={'24px'}/>
                    </TouchableWithoutFeedback>
                    )
                })}
            />

            <Tab.Screen name="Finance" 
                component={Finance}
                options={() => ({
                    headerTitle: 'Finanças',
                    tabBarLabel: 'Finanças',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                    <TouchableWithoutFeedback>
                        <ImageWrapper source={focused ? WalletIconActive : WalletIconInactive} width={'24px'} height={'24px'}/>
                    </TouchableWithoutFeedback>
                    )
                })}
            />
            
            <Tab.Screen name="Settings" 
                component={SettingNavigator} 
                options={() => ({
                    headerTitle: 'Ajustes',
                    tabBarLabel: 'Ajustes',
                    headerShown: false,
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
    tabBarActiveTintColor: Constants.colors.primary[600],
}

const screenOptionsStackNavigator = {
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

//height: 55 + insets.bottom
const tabBarStyle =  { paddingRight: 32, paddingLeft: 32 } 