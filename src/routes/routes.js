import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image, Text } from "react-native";
import styles from "../constants/utils/styles";
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
            headerTitleStyle: { fontFamily: styles.fontStyleConfig.Bold },
            headerStyle: {
                backgroundColor: styles.headerStyleConfig.backgroundColor
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTitle: 'Entrar', 
            headerLeft: () =>  ( <Image source={require('../../assets/Button/arrow-left.svg')} /> )
        }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}