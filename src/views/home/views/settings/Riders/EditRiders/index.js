import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native';
import PaddingContent from '../../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../../../../../components/utils/SafeAreaViewLogin.component';
import InputWithTitleSubtitle from '../../../../../../components/utils/InputWithTitleSubtitle.component';
import ButtonPrimaryDefault from '../../../../../../components/utils/ButtonPrimaryDefault.component';
import * as Store from "../../../../../../redux/store/store";
import { FinanceView } from '../../../../../../components/ridersdetails/FinanceView.component';

export default function EditRiders({ navigation, route }) {
        const { listOfRiders, setListOfRiders } = useContext(Store.HomeContext);
        const { index } = route.params;
        const [riderInfo, setRiderInfo] = useState({
            name: "",
            address: "",
        })
        const handleChange = (value, type) => {
            setRiderInfo(prev => ({...prev, [type]: value}))
        }

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
                    style={{marginBottom: 30}} 
                    title={"Salvar alterações"} 
                    onPress={() => { 
                        listOfRiders[index].name = riderInfo.name;
                        listOfRiders[index].address = riderInfo.address;
                        navigation.navigate('RidersScreen');
                        }}/>
                    
                </PaddingContent>
            </SafeAreaViewDefault>
    );
}