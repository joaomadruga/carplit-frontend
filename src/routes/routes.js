import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image, Text } from "react-native";
import ArrowLeft from "../../assets/Button/arrow-left.svg";
import * as Constants from "../constants/utils/Constants";
import LoginScreen from "../views/login";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
          name="Login" 
          component={LoginScreen}
          options={{ 
            headerTintColor: 'black',
            headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold },
            headerStyle: {
                backgroundColor: Constants.headerStyleConfig.backgroundColor
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTitle: 'Entrar', 
            headerLeft: () =>  ( <ArrowLeft /> )
        }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}