import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from "react";
import { Button, Image, Platform, Text, TouchableWithoutFeedback, View } from "react-native";
import ArrowLeft from "../../assets/Button/arrow-left.svg";
import * as Constants from "../constants/utils/Constants";
import LoginScreen from "../views/login";
import StartScreen from "../views/start";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{
              headerShown: false 
            }}
          />
         
          <Stack.Screen
          name="Login" 
          component={LoginScreen}
          options={({ navigation }) => ({
            headerTintColor: 'black',
            headerBackTitleVisible: false,
            headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold },
            headerStyle: {
                backgroundColor: Constants.headerStyleConfig.BackgroundColor
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTitle: 'Entrar',
            headerTitleAlign: 'center',
            headerLeft: () => { return (
              Platform.OS === "web" ? <ArrowLeft onClick={navigation.goBack}/> : <ArrowLeft onPress={navigation.goBack}/>
            ) }
        })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}