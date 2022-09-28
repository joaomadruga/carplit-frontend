import { NavigationContainer } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { LogBox } from "react-native";
import HomeRoutes from "./homeRoutes";
import InitialRoutes from "./initialRoutes";
import * as Store from "../redux/store/store";

LogBox.ignoreLogs([
  'Require cycle:'
]);

export default function Routes() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    login: "",
    password: "",
    authToken: ""
  });
  return (
    <>
      <NavigationContainer>
        <Store.LoginContext.Provider value={{ loginInfo, setLoginInfo, isLogin, setIsLogin }}>  
          <InitialRoutes HomeRoutes={HomeRoutes}/>
        </Store.LoginContext.Provider>
      </NavigationContainer>
    </>
  )
}