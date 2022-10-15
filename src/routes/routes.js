import { NavigationContainer } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
import InitialRoutes from "./initialRoutes";
import * as Store from "../redux/store/store";
import * as SecureStore from 'expo-secure-store';
import { getAuthTokenLogin } from "../helper/login/utils";

LogBox.ignoreLogs([
  'Require cycle:'
]);

async function getValueFor(key) {
  let result;
  if (Platform.OS === "web") {
    result = localStorage.getItem(key);
  } else {
    result = await SecureStore.getItemAsync(key);
  }
  return JSON.parse(result);
}

export default function Routes() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    login: "",
    password: "",
    authToken: "",
    loginDate: "",
    averageConsumption: "",
    fuelPerLiter: ""
  });
  const saveAuthTokenLocal = async (value) => { 
    if (Platform.OS === "web"){
      localStorage.setItem("loginInfo", JSON.stringify(value));
    } else {
      await SecureStore.setItemAsync("loginInfo", JSON.stringify(value));
    }
  };

  useEffect(() => {
    const value = getValueFor("loginInfo")
    .then(response => {
      const currentDate = new Date;
      const loginDate = new Date(response.loginDate);
      const difDateInHour = (currentDate - loginDate)/1000/60/60/24;
      const jwtDaysExpiration = 1;
      const isTokenExpired = difDateInHour > jwtDaysExpiration;
      if (response.authToken && !isTokenExpired) {
        setLoginInfo(response);
        setIsLogin(true);
      } else if (response.authToken && isTokenExpired) {
        const newToken = (async () => 
          await getAuthTokenLogin(response.login.toLowerCase().trim(), response.password)
          .then((res) => {
            setLoginInfo({login: response.login, password: response.password, authToken: res.data.token, averageConsumption: response.averageConsumption, fuelPerLiter: response.fuelPerLiter});
            setIsLogin(true);
          })
          .catch((error) => {
            console.log(error);
          }))();
      };
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    saveAuthTokenLocal(loginInfo);
  }, [loginInfo]);

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