import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback } from "react-native";
import ImageWrapper from "../../../../components/utils/ImageWrapper.component";
import * as Constants from "../../../../constants/utils/Constants";
import ArrowLeft from "../../../../../assets/Button/arrow-left.png";
import AddIcon from "../../../../../assets/Home/add-icon.png";
import MoreDots from "../../../../../assets/Settings/more-icon.png";
import { Modalize, useModalize } from 'react-native-modalize';
import Paths from "../../../../views/home/views/settings/Paths";
import AddPath from "../../../../views/home/views/settings/Paths/AddPath";
import EditPath from "../../../../views/home/views/settings/Paths/EditPath";

const StackPaths = createNativeStackNavigator();

export const PathsNavigator = ({ navigation, route }) => {
    const { ref, open, close } = useModalize();
    return (
        <StackPaths.Navigator screenOptions={screenOptions} initialRouteName='PathsScreen'>
            <StackPaths.Screen
            component={Paths}
            name="PathsScreen"
            options={({ navigation }) => ({
                headerTitle: 'Trajetos',
                title: 'Trajetos',
                headerLeft: () =>  ( 
                    <TouchableWithoutFeedback onPress={navigation.goBack}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                    </TouchableWithoutFeedback>
                ),
                headerRight: () => (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('AddPath')}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={AddIcon} />
                    </TouchableWithoutFeedback> 
                )
            })} />
            
            <StackPaths.Screen
            component={AddPath}
            name="AddPath"
            options={({navigation}) => ({
                headerTitle: 'Adicionar trajeto',
                title: 'Adicionar trajeto',
                headerLeft: () =>  ( 
                    <TouchableWithoutFeedback onPress={navigation.goBack}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                    </TouchableWithoutFeedback>
                ),
            })}
            />
            <StackPaths.Screen
            options={({navigation}) => ({
                headerTitle: 'Editar trajeto',
                title: 'Editar trajeto',
                headerLeft: () =>  ( 
                    <TouchableWithoutFeedback onPress={navigation.goBack}>
                        <ImageWrapper style={{cursor: 'pointer'}} width={'24px'} height={'24px'} source={ArrowLeft} />
                    </TouchableWithoutFeedback>
                ),
            })}
            name="EditPath"
            component={EditPath}
            />

            
        </StackPaths.Navigator>
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