import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import CarpoolContent from '../../../../components/carpool/CarpoolContent.component';
import SectionListCarpool from '../../../../components/carpool/SectionListCarpool.component';
import BigHeaderTitle from '../../../../components/utils/BigHeaderTitle.component';
import Empty from '../../../../components/utils/Empty.component';
import PaddingContent from '../../../../components/utils/PaddingContent.component';
import RoundedPlusButton from '../../../../components/utils/RoundedPlusButton.component';
import SafeAreaViewDefault from '../../../../components/utils/SafeAreaViewLogin.component';
import { LoginContext } from '../../../../routes/routes';

export default function Carpool({ navigation }) {
        const { loginInfo, setLoginInfo } = useContext(LoginContext);
        const [listOfCarpools, setListOfCarpools] = useState([
        {
            date: `${parseInt(Math.random() * (31 - 1) + 1)}/07/2002`,
            data: [ 
            { titleText: 'Casa - UFPE (via Boa Viagem) ', subtitleText: `${parseInt(Math.random() * (4 - 1) + 1)} pessoas + você` }, 
            { titleText: 'Casa - UFPE (via Boa Viagem)', subtitleText: `${parseInt(Math.random() * (4 - 1) + 1)} pessoas + você` }
        ]}])
        const [isListOfCarpoolsEmpty, setIsListOfCarpoolsEmpty] = useState(listOfCarpools.length == 0)
        //const { userLogin } = route.params;

        useEffect(() => {
            setIsListOfCarpoolsEmpty(listOfCarpools.length == 0)
        }, [listOfCarpools])
        //console.log(userLogin)
        return (
            <SafeAreaViewDefault>
                <PaddingContent>
                    <BigHeaderTitle title={'Caronas'}/>
                    {/*<RoundedPlusButton onPress={() => {setListOfCarpools([...listOfCarpools, 
                    {
                        date: `${parseInt(Math.random() * (31 - 1) + 1)}/07/2002`,
                        data: [ 
                        { titleText: 'Casa - UFPE (via Boa Viagem)', subtitleText: `${parseInt(Math.random() * (4 - 1) + 1)} pessoas + você` }, 
                        { titleText: 'Casa - UFPE (via Boa Viagem)', subtitleText: `${parseInt(Math.random() * (4 - 1) + 1)} pessoas + você` }
                    ]}
                    ])}}/> */}
                    <RoundedPlusButton onPress={() => { navigation.navigate('ChoosePath') }} />
                    <CarpoolContent justifyContent={isListOfCarpoolsEmpty ? 'center' : 'flex-start'}>
                        {isListOfCarpoolsEmpty && (<Empty title={"Você ainda não registrou caronas!"} subtitle={"Toque no botão de adicionar + para registar uma nova carona"}/>)}
                        {!isListOfCarpoolsEmpty && (
                        <>
                            <SectionListCarpool listOfCarpools={listOfCarpools} navigation={navigation}/>
                        </>
                        )}
                    </CarpoolContent>
                </PaddingContent>
            </SafeAreaViewDefault>
    );
}