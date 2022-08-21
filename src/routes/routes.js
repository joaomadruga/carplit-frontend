import { NavigationContainer } from "@react-navigation/native";
import { createContext, useState } from "react";
import { LogBox } from "react-native";
import HomeRoutes from "./homeRoutes";
import InitialRoutes from "./initialRoutes";

LogBox.ignoreLogs([
  'Require cycle:'
]);

export const LoginContext = createContext();

export default function Routes() {
  const [isLogin, setIsLogin] = useState(false)
  const [loginInfo, setLoginInfo] = useState({
    login: "",
    password: ""
  })
  return (
    <>
      <NavigationContainer>
        <LoginContext.Provider value={{ loginInfo: loginInfo.login, setLoginInfo: setLoginInfo }}>
          {!isLogin && (<InitialRoutes HomeRoutes={HomeRoutes}/>)}
        </LoginContext.Provider>

        <LoginContext.Provider value={{ loginInfo: loginInfo.login }}>
          {isLogin && (<HomeRoutes/>)}
        </LoginContext.Provider>
        
      </NavigationContainer>
    </>
  )
}