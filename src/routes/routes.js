import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image, Text, TouchableWithoutFeedback } from "react-native";
import ArrowLeft from "../../assets/Button/arrow-left.png";
import ImageWrapper from "../components/utils/ImageWrapper.component";
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
          options={({ navigation, route }) => ({
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
            headerLeft: () =>  ( 
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <ImageWrapper width={48} height={48} source={ArrowLeft} />
            </TouchableWithoutFeedback>
             )
        })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}