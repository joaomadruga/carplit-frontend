import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native';
import PaddingContent from '../../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../../../../../components/utils/SafeAreaViewLogin.component';
import InputWithTitleSubtitle from '../../../../../../components/utils/InputWithTitleSubtitle.component';
import ButtonPrimaryDefault from '../../../../../../components/utils/ButtonPrimaryDefault.component';
import * as Store from "../../../../../../redux/store/store";
import NotificationPopup from '../../../../../../components/utils/NotificationPopup.component';
import { addRider } from '../../../../../../helper/riders/utils';
import * as Constants from "../../../../../../constants/utils/Constants";

export default function AddRiders({ navigation, route }) {
        const { listOfRiders, setListOfRiders } = useContext(Store.HomeContext);
        const { loginInfo } = useContext(Store.LoginContext);
        const [isDisabled, setIsDisabled] = useState(false);
        const [showPopup, setShowPopup] = useState(false);
        const [riderInfo, setRiderInfo] = useState({
            name: "",
            address: "",
        })
        const handleChange = (value, type) => {
            setRiderInfo(prev => ({...prev, [type]: value}))
        }
        const onSubmit = async () => {
            setIsDisabled(true);
            if (riderInfo.name && riderInfo.address) {
                const addObj = { name: riderInfo.name.trim(), address: riderInfo.address.trim() };
                const responseAddRider = await addRider(loginInfo.authToken, addObj)
                .then(response => {
                    setListOfRiders(oldArray => [...oldArray, response.data.passenger]);
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
                        TextTitle={'Nome da pessoa'} 
                        TextSubtitle={'Como você chama a pessoa que está cadastrando ;)'}
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
                    title={"Adicionar passageiro"}
                    disabled={isDisabled}
                    style={{backgroundColor: isDisabled ? Constants.colors.gray[700] : Constants.buttonConfig.Default.Primary.Small.BackgroundColor, marginBottom: 30}}
                    onPress={() => { 
                        onSubmit();
                    }}/>
                    { showPopup && <NotificationPopup title={"Campos inválidos."} setShowPopup={setShowPopup} bottom={'35px'}/> }
                </PaddingContent>
            </SafeAreaViewDefault>
    );
}