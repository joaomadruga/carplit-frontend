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

const Tab = createBottomTabNavigator();
//const TopTab = createMaterialTopTabNavigator();

/*
const TopNavigator = () => {
    return (
        <TopTab.Navigator screenOptions={{
            tabBarInactiveTintColor: Constants.colors.gray[600],
            tabBarActiveTintColor: Constants.colors.primary[600], 
            tabBarIndicatorStyle: {backgroundColor: Constants.colors.primary[600]}
            }}>
            <TopTab.Screen name="Carpool" component={Carpool} />
            <TopTab.Screen name="Finance" component={Finance} />
        </TopTab.Navigator>
    )
}
*/

export default function HomeRoutes() {
  const insets = useSafeAreaInsets();
  return (
        <Tab.Navigator screenOptions={{...screenOptions, tabBarStyle: tabBarStyle}}>
            
            <Tab.Screen name="Home" 
                component={CarpoolNavigator}
                options={({ navigation }) => ({
                    headerTitle: 'Início',
                    tabBarLabel: 'Início',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                        <ImageWrapper source={focused ? CarIconActive : CarIconInactive} width={'24px'} height={'24px'}/>
                    </TouchableWithoutFeedback>
                    )
                })}
            />

            <Tab.Screen name="Finance" 
                component={Finance}
                options={({ navigation }) => ({
                    headerTitle: 'Finanças',
                    tabBarLabel: 'Finanças',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Finance')}>
                        <ImageWrapper source={focused ? WalletIconActive : WalletIconInactive} width={'24px'} height={'24px'}/>
                    </TouchableWithoutFeedback>
                    )
                })}
            />
            
            <Tab.Screen name="Settings" 
                component={SettingNavigator} 
                options={({ navigation }) => ({
                    headerTitle: 'Ajustes',
                    tabBarLabel: 'Ajustes',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Settings')}>
                            <ImageWrapper source={focused ? SettingsIconActive: SettingsIconInactive} width={'24px'} height={'24px'}/>
                        </TouchableWithoutFeedback>
                        )
                })}
            />
            
        </Tab.Navigator>
  );
}

const screenOptions = {
    headerTintColor: 'black',
    headerBackTitleVisible: false,
    headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold },
    headerStyle: { backgroundColor: Constants.headerStyleConfig.BackgroundColor },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    tabBarInactiveTintColor: Constants.colors.gray[600],
    tabBarActiveTintColor: Constants.colors.primary[600],
}
//height: 55 + insets.bottom
export const tabBarStyle =  { paddingRight: 32, paddingLeft: 32 } 