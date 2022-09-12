import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback } from "react-native";
import ImageWrapper from "../../../../components/utils/ImageWrapper.component";
import Riders from "../../../../views/home/views/settings/Riders";
import * as Constants from "../../../../constants/utils/Constants";
import ArrowLeft from "../../../../../assets/Button/arrow-left.png";
import AddIcon from "../../../../../assets/Home/add-icon.png";
import MoreDots from "../../../../../assets/Settings/more-icon.png";
import AddRiders from "../../../../views/home/views/settings/Riders/AddRiders";
import RidersDetails from "../../../../views/home/views/settings/Riders/RidersDetails";
import { Modalize, useModalize } from 'react-native-modalize';
import EditRiders from "../../../../views/home/views/settings/Riders/EditRiders";

const StackRiders = createNativeStackNavigator();

export const RidersNavigator = ({ navigation, route }) => {
    const { ref, open, close } = useModalize();
    return (
        <StackRiders.Navigator screenOptions={screenOptions} initialRouteName='RidersScreen'>
            <StackRiders.Screen
            component={Riders}
            name="RidersScreen"
            options={({ navigation }) => ({
                headerTitle: 'Passageiros',
                title: 'Passageiros',
                headerLeft: () =>  ( 
                    <TouchableWithoutFeedback onPress={navigation.goBack}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                    </TouchableWithoutFeedback>
                ),
                headerRight: () => (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('AddRiders')}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={AddIcon} />
                    </TouchableWithoutFeedback> 
                )
            })} />

            <StackRiders.Screen
            component={AddRiders}
            name="AddRiders"
            options={({navigation}) => ({
                headerTitle: 'Adicionar passageiro',
                title: 'Adicionar passageiro',
                headerLeft: () =>  ( 
                    <TouchableWithoutFeedback onPress={navigation.goBack}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                    </TouchableWithoutFeedback>
                ),
            })}
            />

            <StackRiders.Screen
            options={({ navigation, route }) => ({
                headerTitle: route.params.name,
                title: route.params.name,
                headerLeft: () =>  (
                <TouchableWithoutFeedback onPress={navigation.goBack}>
                    <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                </TouchableWithoutFeedback>
                ),
                headerRight: () => (
                <TouchableWithoutFeedback onPress={() => open()}>
                    <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={MoreDots} />
                </TouchableWithoutFeedback>
                )
            })}
            name="RidersDetails"
            initialParams={{ ref }}

            component={RidersDetails}
            />

            <StackRiders.Screen
            options={({navigation}) => ({
                headerTitle: 'Editar passageiro',
                title: 'Editar passageiro',
                headerLeft: () =>  ( 
                    <TouchableWithoutFeedback onPress={navigation.goBack}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                    </TouchableWithoutFeedback>
                ),
            })}
            name="EditRiders"
            component={EditRiders}
            />
        </StackRiders.Navigator>
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