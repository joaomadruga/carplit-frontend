import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { Button, Image, Text, TouchableWithoutFeedback } from "react-native";
import ArrowLeft from "../../../assets/Button/arrow-left.png";
import ImageWrapper from "../../components/utils/ImageWrapper.component";
import * as Constants from "../../constants/utils/Constants";
import LoginScreen from "../../views/login";
import ForgotPasswordScreen from '../../views/login/ForgotPasswordScreen';
import RegisterScreen from '../../views/register';
import SecondRegisterScreen from '../../views/register/SecondRegisterScreen';
import ThirdRegisterScreen from '../../views/register/ThirdRegisterScreen';
import StartScreen from "../../views/start";
import * as Store from "../../redux/store/store";

const Stack = createNativeStackNavigator();

export default function InitialRoutes({ HomeRoutes }) {
  const { isLogin } = useContext(Store.LoginContext);
  return (
        <Stack.Navigator initialRouteName={isLogin ? "HomeRoutes" : "Start"} screenOptions={screenOptions} >
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
              title: 'Entrar',
              headerLeft: () =>  ( 
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
              </TouchableWithoutFeedback>
              )
            })}
          />
        
          <Stack.Screen
              name="ForgotPasswordScreen" 
              component={ForgotPasswordScreen}
              options={({ navigation }) => ({
                headerTitle: 'Redefinir senha',
                title: 'Redefinir senha',
                headerLeft: () =>  ( 
                <TouchableWithoutFeedback onPress={navigation.goBack}>
                  <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                </TouchableWithoutFeedback>
                )
              })}
            />

          <Stack.Screen
            name="Register"
            component={ RegisterScreen }
            options={({ navigation }) => ({
              headerTitle: 'Criar uma conta',
              title: 'Criar uma conta',
              headerLeft: () =>  ( 
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
              </TouchableWithoutFeedback>
              )
            })}
          />

          <Stack.Screen
            name="SecondRegisterScreen"
            component={ SecondRegisterScreen }
            options={({ navigation }) => ({
              headerTitle: 'Criar uma conta',
              title: 'Criar uma conta',
              headerLeft: () =>  ( 
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
              </TouchableWithoutFeedback>
              )
            })}
          />

          <Stack.Screen
            name="ThirdRegisterScreen"
            component={ ThirdRegisterScreen }
            options={({ navigation }) => ({
              headerTitle: 'Criar uma conta',
              title: 'Criar uma conta',
              headerLeft: () =>  ( 
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
              </TouchableWithoutFeedback>
              )
            })}
          />  

          <Stack.Screen
            name="HomeRoutes"
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