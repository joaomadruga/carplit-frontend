import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import ImageWrapper from "../../../components/utils/ImageWrapper.component";
import Carpool from "../../../views/home/views/carpool";
import CarpoolDetails from "../../../views/home/views/carpool/CarpoolDetails";
import ChoosePath from "../../../views/home/views/carpool/ChoosePath";
import AddIcon from "../../../../assets/Home/add-icon.png";
import ArrowLeft from "../../../../assets/Button/arrow-left.png";
import * as Constants from "../../../constants/utils/Constants";
import { tabBarStyle } from "..";
import ChooseGroup from "../../../views/home/views/carpool/ChooseGroup";
import AddCarpool from "../../../views/home/views/carpool/AddCarpool";

const StackSettings = createNativeStackNavigator();
export const CarpoolContext = createContext();
const gasPrice = 5.5;

export const CarpoolNavigator = ({ navigation, route }) => {
    const [listOfCarpools, setListOfCarpools] = useState([]);
    //listofpaths should come from settings
    const [listOfPaths, setListOfPaths] = useState([
        {
            date: `31/07/2002`,
            data: [
            { pathTitle: 'Casa - UFPE (via Boa Viagem)', pathDistance: '16km', kmL: 2.54, gasPrice: gasPrice }
            ]
        }
    ]);

    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName && routeName !== "CarpoolScreen"){
            navigation.setOptions({tabBarStyle: { backgroundColor: 'white', display: 'none' }})
            
        } else {
            navigation.setOptions({tabBarStyle: { display: 'flex', ...tabBarStyle}});
        }
    }, [navigation, route]);

    return (
        <CarpoolContext.Provider value={{ listOfCarpools, listOfPaths, setListOfCarpools }}>
            <StackSettings.Navigator screenOptions={screenOptions} initialRouteName='CarpoolScreen'>
                    <StackSettings.Screen 
                    options={{headerShown: false}} 
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
                            headerTitle: "Selecione o trajeto",
                            title: "Selecione o trajeto",
                            headerLeft: () =>  ( 
                            <TouchableWithoutFeedback onPress={navigation.goBack}>
                                <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                            </TouchableWithoutFeedback>
                            ),
                            headerRight: () => {
                                if (listOfPaths.length === 0) {
                                    return ( 
                                        <TouchableWithoutFeedback>
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

                    
            </StackSettings.Navigator>
        </CarpoolContext.Provider>
    )
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