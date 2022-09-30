import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native';
import PaddingContent from '../../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../../../../../components/utils/SafeAreaViewLogin.component';
import InputWithTitleSubtitle from '../../../../../../components/utils/InputWithTitleSubtitle.component';
import ButtonPrimaryDefault from '../../../../../../components/utils/ButtonPrimaryDefault.component';
import * as Store from "../../../../../../redux/store/store";
import DistanceInput from '../../../../../../components/editpath/DistanceInput.component';
import NotificationPopup from '../../../../../../components/utils/NotificationPopup.component';
import * as Constants from "../../../../../../constants/utils/Constants";
import { updatePath } from '../../../../../../helper/path/utils';

export default function EditPath({ navigation, route }) {
        const { listOfPaths, setListOfPaths } = useContext(Store.HomeContext);
        const [showPopup, setShowPopup] = useState(false);
        const { loginInfo } = useContext(Store.LoginContext);
        const { currentItem } = route.params;
        const [pathInfo, setPathInfo] = useState({
            pathTitle: '', 
            pathDistance: '',
        });
        const [isDisabled, setIsDisabled] = useState(false);
        
        const handleChange = (value, type) => {
            setPathInfo(prev => ({...prev, [type]: value}))
        };

        const onSubmit = async () => {
            setIsDisabled(true);
            if (pathInfo.pathTitle && pathInfo.pathDistance) {
                const updateObj = {
                    "title": pathInfo.pathTitle,
                    "totalDistance": parseFloat(pathInfo.pathDistance.replace('km', '').replace(',', '.'))
                };
                const responseUpdatePath = await updatePath(loginInfo.authToken, currentItem.id, updateObj)
                .then(response => {
                    listOfPaths[currentItem.index].title = pathInfo.pathTitle;
                    listOfPaths[currentItem.index].totalDistance = pathInfo.pathDistance;
                    navigation.navigate('PathsScreen');
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
                        />
                    </View>
                    <ButtonPrimaryDefault 
                    style={{marginBottom: 30}} 
                    title={"Salvar alterações"} 
                    onPress={() => { onSubmit() }}
                    disabled={isDisabled}
                    underlayColor={Constants.buttonConfig.Ontouch.Primary.Small.BackgroundColor}
                    />
                    
                    { showPopup && <NotificationPopup title={"Campos inválidos."} setShowPopup={setShowPopup} bottom={'35px'}/> }
                </PaddingContent>

            </SafeAreaViewDefault>
    );
}