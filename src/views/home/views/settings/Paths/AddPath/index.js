import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native';
import { HomeContext } from '../../../../../../routes/homeRoutes';
import PaddingContent from '../../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../../../../../components/utils/SafeAreaViewLogin.component';
import InputWithTitleSubtitle from '../../../../../../components/utils/InputWithTitleSubtitle.component';
import ButtonPrimaryDefault from '../../../../../../components/utils/ButtonPrimaryDefault.component';

export default function AddPath({ navigation, route }) {
        const { listOfPaths, setListOfPaths } = useContext(HomeContext);
        const [pathInfo, setPathInfo] = useState({ 
            pathTitle: '', 
            pathDistance: '',
        }
        )
        const handleChange = (value, type) => {
            setPathInfo(prev => ({...prev, [type]: value}))
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
                        <InputWithTitleSubtitle
                        TextTitle={'Distância total em km'} 
                        TextSubtitle={'Você pode calcular a distância total do seu trajeto no Google Maps'}
                        InputPlaceHolder={'Distância total (em km)'}
                        onChangeText={(value) => {handleChange(value, 'pathDistance')}} value={pathInfo.pathDistance} 
                        />
                    </View>
                    <ButtonPrimaryDefault 
                    style={{marginBottom: 30}} 
                    title={"Adicionar trajeto"} 
                    onPress={() => { 
                        setListOfPaths(oldArray => [...oldArray, pathInfo]);
                        navigation.goBack()
                        }}/>
                    
                </PaddingContent>
            </SafeAreaViewDefault>
    );
}