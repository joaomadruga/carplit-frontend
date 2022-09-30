import { NavigationContainer } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { LogBox } from "react-native";
import InitialRoutes from "./initialRoutes";
import * as Store from "../redux/store/store";
import * as SecureStore from 'expo-secure-store';

LogBox.ignoreLogs([
  'Require cycle:'
]);

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

export default function Routes() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    login: "",
    password: "",
    authToken: ""
  });
  const saveAuthTokenLocal = async (value) => await SecureStore.setItemAsync("authToken", value);

  useEffect(() => {
    const value = getValueFor("authToken")
    .then(response => {
      if (response) {
        setLoginInfo(prev => ({...prev, ["authToken"]: response}));
        setIsLogin(true);
      };
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    saveAuthTokenLocal(loginInfo.authToken);
  }, [loginInfo.authToken]);

  return (
    <>
      <NavigationContainer>
        <Store.LoginContext.Provider value={{ loginInfo, setLoginInfo, isLogin, setIsLogin }}>  
          <InitialRoutes/>
        </Store.LoginContext.Provider>
      </NavigationContainer>
    </>
  )
}