import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image, Text, TouchableWithoutFeedback } from "react-native";
import ArrowLeft from "../../assets/Button/arrow-left.png";
import ImageWrapper from "../components/utils/ImageWrapper.component";
import * as Constants from "../constants/utils/Constants";
import LoginScreen from "../views/login";
import StartScreen from "../views/start";

const Stack = createNativeStackNavigator();

export default function InitialRoutes({ HomeRoutes }) {
  return (
        <Stack.Navigator initialRouteName="Start" screenOptions={screenOptions}>
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
              headerTitle: 'Entrar',
              headerLeft: () =>  ( 
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <ImageWrapper width={48} height={48} source={ArrowLeft} />
              </TouchableWithoutFeedback>
              )
            })}
          />

        <Stack.Screen
          name="LoginHome"
          component={HomeRoutes}
          options={{
            headerShown: false,
          }}
        />
        </Stack.Navigator>
  );
}

const screenOptions = {
  headerTintColor: 'black',
  headerBackTitleVisible: false,
  headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold },
  headerStyle: {
      backgroundColor: Constants.headerStyleConfig.BackgroundColor
  },
  headerShadowVisible: false,
  headerTitleAlign: 'center'
}