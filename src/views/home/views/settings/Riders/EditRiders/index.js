import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native';
import PaddingContent from '../../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../../../../../components/utils/SafeAreaViewLogin.component';
import InputWithTitleSubtitle from '../../../../../../components/utils/InputWithTitleSubtitle.component';
import ButtonPrimaryDefault from '../../../../../../components/utils/ButtonPrimaryDefault.component';
import * as Store from "../../../../../../redux/store/store";
import * as Constants from "../../../../../../constants/utils/Constants";
import { FinanceView } from '../../../../../../components/ridersdetails/FinanceView.component';
import { updateRider } from '../../../../../../helper/riders/utils';
import NotificationPopup from '../../../../../../components/utils/NotificationPopup.component';

export default function EditRiders({ navigation, route }) {
        const { listOfRiders, setListOfRiders } = useContext(Store.HomeContext);
        const { loginInfo } = useContext(Store.LoginContext);
        const { index, id } = route.params;
        const [isDisabled, setIsDisabled] = useState(false);
        const [showPopup, setShowPopup] = useState(false);
        const [riderInfo, setRiderInfo] = useState({
            name: "",
            address: "",
        });
        const handleChange = (value, type) => {
            setRiderInfo(prev => ({...prev, [type]: value}))
        };
        
        const onSubmit = async () => {
            if (riderInfo.name && riderInfo.address){
                setIsDisabled(true);
                const updateObj = {
                    "name": riderInfo.name.trim(),
                    "address": riderInfo.address.trim()
                };
                await updateRider(loginInfo.authToken, id, updateObj)
                .then ((response) => {
                    listOfRiders[index].name = updateObj.name;
                    listOfRiders[index].address = updateObj.address;
                    navigation.navigate('RidersScreen');
                })
                .catch((error) => {
                    console.log(error);
                    setShowPopup(true);
                });
                setIsDisabled(false);
            } else {
                setShowPopup(true);
            }
        };
        return (
            <SafeAreaViewDefault>
                <PaddingContent style={{justifyContent:'space-between'}}>
                    <View>
                        <InputWithTitleSubtitle
                        TextTitle={'Nome da pessoa'} 
                        TextSubtitle={'Como você costuma chamar a sua rota (ex: Candeias - UFPE via Boa Viagem)'}
                        InputPlaceHolder={'Nome da pessoa'}
                        onChangeText={(value) => {handleChange(value, 'name')}} 
                        value={riderInfo.name}
                        />
                        <InputWithTitleSubtitle
                        TextTitle={'Endereço ou ponto de encontro'} 
                        TextSubtitle={'Com essa informação, futuramente, poderemos calcular a distância total com maior precisão'}
                        InputPlaceHolder={'Endereço ou ponto de encontro'}
                        onChangeText={(value) => {handleChange(value, 'address')}} value={riderInfo.address} 
                        />
                    </View>
                    <ButtonPrimaryDefault 
                    title={"Salvar alterações"} 
                    disabled={isDisabled}
                    style={{backgroundColor: isDisabled ? Constants.colors.gray[700] : Constants.buttonConfig.Default.Primary.Small.BackgroundColor, marginBottom: 30}}
                    onPress={() => { onSubmit() }}/>
                    
                    { showPopup && <NotificationPopup title={"Nome ou endereço inválidos."} setShowPopup={setShowPopup} bottom={'20px'}/> }
                </PaddingContent>
            </SafeAreaViewDefault>
    );
}