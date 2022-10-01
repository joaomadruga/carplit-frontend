import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableWithoutFeedback } from "react-native";
import * as Constants from "../../constants/utils/Constants";
import ImageWrapper from "../../components/utils/ImageWrapper.component";
import CarIconInactive from "../../../assets/Home/car-icon-inactive.png";
import CarIconActive from "../../../assets/Home/car-icon-active.png";
import WalletIconInactive from "../../../assets/Home/wallet-finance-icon-inactive.png";
import WalletIconActive from "../../../assets/Home/wallet-finance-icon-active.png";
import SettingsIconInactive from "../../../assets/Home/user-settings-icon-inactive.png";
import SettingsIconActive from "../../../assets/Home/user-settings-icon-active.png";
import Finance from '../../views/home/views/finance';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CarpoolNavigator } from './CarpoolRoutes';
import { SettingNavigator } from './SettingsRoutes';
import { createContext, useContext, useEffect, useState } from 'react';
import * as Store from "../../redux/store/store";
import { getPath } from '../../helper/path/utils';
import { getRiders } from '../../helper/riders/utils';

const Tab = createBottomTabNavigator();

export const loadAllLists = async (authToken, setListOfPaths, setListOfRiders) => {
    const responsePaths = await getPath(authToken)
    .then((response) => {
        setListOfPaths(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    const responseRiders = await getRiders(authToken)
    .then((response) => {
        setListOfRiders(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
};

export default function HomeRoutes({ navigation, route }) {
    const insets = useSafeAreaInsets();
    const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
    const [listOfRiders, setListOfRiders] = useState([]);
    /*
    [{name: 'Zé', 
    address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE', 
    isParticipating: true, 
    isDriver: true, 
    hasPaid: true,
    price: 0,
    carpoolHistory: []}]
    */
    const [listOfPaths, setListOfPaths] = useState([]);
    const [consumeAndFuel, setConsumeAndFuel] = useState({
        priceFuel: 0,
        consumeFuel: 0
    });

    useEffect(() => {
        loadAllLists(loginInfo.authToken, setListOfPaths, setListOfRiders);
    }, []);
    
  return (
        <Store.HomeContext.Provider value={{ listOfRiders, setListOfRiders, listOfPaths, setListOfPaths, consumeAndFuel, setConsumeAndFuel }}>
            <Tab.Navigator screenOptions={{...screenOptions, tabBarStyle: tabStyle(insets), headerShown: false}}>
            
                <Tab.Screen name="Home"
                    component={CarpoolNavigator}
                    initialParams={route ? route.params : {'isRegister': false}}
                    options={() => ({
                        headerTitle: 'Início',
                        tabBarLabel: 'Início',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <ImageWrapper source={focused ? CarIconActive : CarIconInactive} width={'24px'} height={'24px'}/>
                        )
                    })}
                />

                <Tab.Screen name="Finance" 
                    component={Finance}
                    options={() => ({
                        headerTitle: 'Finanças',
                        tabBarLabel: 'Finanças',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <ImageWrapper source={focused ? WalletIconActive : WalletIconInactive} width={'24px'} height={'24px'}/>
                        )
                    })}
                />
                
                <Tab.Screen name="SettingNavigator" 
                    component={SettingNavigator} 
                    options={() => ({
                        headerTitle: 'Ajustes',
                        tabBarLabel: 'Ajustes',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                                <ImageWrapper source={focused ? SettingsIconActive: SettingsIconInactive} width={'24px'} height={'24px'}/>
                            )
                    })}
                />
            
            </Tab.Navigator>
        </Store.HomeContext.Provider>
  );
}

const screenOptions = {
    headerTintColor: 'black',
    headerBackTitleVisible: false,
    headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold },
    headerStyle: { backgroundColor: Constants.headerStyleConfig.BackgroundColor },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    tabBarActiveTintColor: Constants.colors.primary[600]
}
export const tabStyle = (insets) => { return { paddingRight: 32, paddingLeft: 32, height: 72 + insets.bottom, paddingBottom: 15 + insets.bottom, paddingTop: 15 } }