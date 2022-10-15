import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native';
import PaddingContent from '../../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../../../../../components/utils/SafeAreaViewLogin.component';
import InputWithTitleSubtitle from '../../../../../../components/utils/InputWithTitleSubtitle.component';
import ButtonPrimaryDefault from '../../../../../../components/utils/ButtonPrimaryDefault.component';
import * as Store from "../../../../../../redux/store/store";
import DistanceInput from '../../../../../../components/editpath/DistanceInput.component';
import NotificationPopup from '../../../../../../components/utils/NotificationPopup.component';
import * as Constants from '../../../../../../constants/utils/Constants';
import { addPath } from '../../../../../../helper/path/utils';

export default function AddPath({ navigation, route }) {
        const { listOfPaths, setListOfPaths } = useContext(Store.HomeContext);
        const { loginInfo } = useContext(Store.LoginContext);
        const [showPopup, setShowPopup] = useState(false);
        const [isDisabled, setIsDisabled] = useState(false);
        const [pathInfo, setPathInfo] = useState({ 
            pathTitle: '', 
            pathDistance: '',
        }
        )
        const handleChange = (value, type) => {
            setPathInfo(prev => ({...prev, [type]: value}))
        }

        const onSubmit = async () => {
            setIsDisabled(true);
            if (pathInfo.pathTitle && pathInfo.pathDistance) {
                const addObj = {
                    "title": pathInfo.pathTitle,
                    "totalDistance": parseFloat(pathInfo.pathDistance.replace('km', '').replace(',', '.'))
                };
                const responseAddPath = await addPath(loginInfo.authToken, addObj)
                .then(response => {
                    setListOfPaths(oldArray => [...oldArray, response.data.path])
                    navigation.goBack();
                })
                .catch((error) => {
                    console.log(error);
                    setShowPopup(true);
                });
                
            } else {
                setShowPopup(true);
            }
            setIsDisabled(false);
        }

        return (
            <SafeAreaViewDefault>
                <PaddingContent style={{justifyContent:'space-between'}}>
                    <View>
                        <InputWithTitleSubtitle
                        TextTitle={'Nome do trajeto'} 
                        TextSubtitle={'Como você costuma chamar a sua rota (ex: Candeias - UFPE via Boa Viagem)'}
                        InputPlaceHolder={'Nome do trajeto'}
                        onChangeText={(value) => {handleChange(value, 'pathTitle')}} 
                        value={pathInfo.pathTitle}
                        />
                        <DistanceInput
                        TextTitle={'Distância total em km'} 
                        TextSubtitle={'Você pode calcular a distância total do seu trajeto no Google Maps'}
                        InputPlaceHolder={'Distância total (em km)'}
                        pathInfoState={{pathInfo, setPathInfo}}
                        value={pathInfo.pathDistance} 
                        />
                    </View>
                    <ButtonPrimaryDefault
                    title={"Adicionar trajeto"} 
                    onPress={() => { 
                        onSubmit()
                        }}
                    disabled={isDisabled}
                    style={{backgroundColor: isDisabled ? Constants.colors.gray[700] : Constants.buttonConfig.Default.Primary.Small.BackgroundColor, marginBottom: 30}}
                    />
                    { showPopup && <NotificationPopup title={"Campos inválidos."} setShowPopup={setShowPopup} bottom={'35px'}/> }
                </PaddingContent>
            </SafeAreaViewDefault>
    );
}