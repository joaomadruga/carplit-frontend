import { CommonActions, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import ImageWrapper from "../../../components/utils/ImageWrapper.component";
import Carpool from "../../../views/home/views/carpool";
import CarpoolDetails from "../../../views/home/views/carpool/CarpoolDetails";
import ChoosePath from "../../../views/home/views/carpool/ChoosePath";
import AddIcon from "../../../../assets/Home/add-icon.png";
import ArrowLeft from "../../../../assets/Button/arrow-left.png";
import * as Constants from "../../../constants/utils/Constants";
import { tabStyle } from "..";
import ChooseGroup from "../../../views/home/views/carpool/ChooseGroup";
import AddCarpool from "../../../views/home/views/carpool/AddCarpool";
import { getCarpools, getPath } from "../../../helper/utils";
import * as Store from "../../../redux/store/store";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddPath from "../../../views/home/views/settings/Paths/AddPath";

const StackSettings = createNativeStackNavigator();

export const CarpoolNavigator = ({ navigation, route }) => {
    const insets = useSafeAreaInsets();
    const [listOfCarpools, setListOfCarpools] = useState([]);
    const { loginInfo, setLoginInfo } = useContext(Store.LoginContext);
    const { listOfPaths, setListOfPaths } = useContext(Store.HomeContext);
    
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName && routeName !== "CarpoolScreen"){
            navigation.setOptions({tabBarStyle: { backgroundColor: 'white', display: 'none' }})
        } else {
            navigation.setOptions({tabBarStyle: { display: 'flex', ...tabStyle(insets)}});
        }
    }, [navigation, route]);
    
    return (
        <Store.CarpoolContext.Provider value={{ listOfCarpools, listOfPaths, setListOfCarpools }}>
            <StackSettings.Navigator screenOptions={screenOptions} initialRouteName='CarpoolScreen'>
                    <StackSettings.Screen 
                    options={{headerShown: false}}
                    initialParams={route.params}
                    name="CarpoolScreen"
                    component={Carpool} 
                    />

                    <StackSettings.Screen
                    options={({ navigation, route }) => ({
                        headerTitle: route.params.date,
                        title: route.params.date,
                        headerLeft: () =>  ( 
                        <TouchableWithoutFeedback onPress={navigation.goBack}>
                            <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                        </TouchableWithoutFeedback>
                        )
                    })}
                    name="CarpoolDetails"
                    component={CarpoolDetails} 
                    />
                    <StackSettings.Screen 
                        options={({ navigation, route }) => ({
                            title: "Selecione o trajeto",
                            headerTitle: "Selecione o trajeto",
                            headerLeft: () =>  ( 
                            <TouchableWithoutFeedback onPress={navigation.goBack}>
                                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                            </TouchableWithoutFeedback>
                            ),
                            headerRight: () => {
                                if (listOfPaths.length === 0) {
                                    return (
                                        <TouchableWithoutFeedback onPress={() => { navigation.navigate('AddPath') }} >
                                            <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={AddIcon} />
                                        </TouchableWithoutFeedback> 
                                        ) 
                                }
                            }
                        })}
                        name="ChoosePath"
                        component={ChoosePath} 
                    />

                    <StackSettings.Screen 
                        options={({ navigation, route }) => ({
                            headerTitle: "Selecione as pessoas",
                            title: "Selecione as pessoas",
                            headerLeft: () =>  ( 
                            <TouchableWithoutFeedback onPress={navigation.goBack}>
                                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                            </TouchableWithoutFeedback>
                            ),
                        })}
                        name="ChooseGroup"
                        component={ChooseGroup} 
                    />

                    <StackSettings.Screen 
                        options={({ navigation, route }) => ({
                            headerTitle: "Adicionar Carona",
                            title: "Adicionar Carona",
                            headerLeft: () =>  ( 
                            <TouchableWithoutFeedback onPress={navigation.goBack}>
                                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                            </TouchableWithoutFeedback>
                            ),
                        })}
                        name="AddCarpool"
                        component={AddCarpool}
                    />

                    <StackSettings.Screen 
                        options={({navigation}) => ({
                            headerTitle: 'Adicionar trajeto',
                            title: 'Adicionar trajeto',
                            headerLeft: () =>  ( 
                                <TouchableWithoutFeedback onPress={navigation.goBack}>
                                    <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                                </TouchableWithoutFeedback>
                            ),
                        })}
                        name="AddPath"
                        component={AddPath}
                    />
                    
            </StackSettings.Navigator>
        </Store.CarpoolContext.Provider>
    )
}

const screenOptions = {
    headerTintColor: 'black',
    headerBackTitleVisible: false,
    headerTitleStyle: { fontFamily: Constants.fontWeightConfig.Bold },
    headerStyle: {
        backgroundColor: Constants.headerStyleConfig.BackgroundColor
    },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    gestureEnabled: true,
    gestureDirection: "horizontal",
    animation: "slide_from_right"
}