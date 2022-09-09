import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import CarpoolContent from '../../../../components/carpool/CarpoolContent.component';
import CarpoolPopup from '../../../../components/carpool/CarpoolPopup.component';
import SectionListCarpool from '../../../../components/carpool/SectionListCarpool.component';
import BigHeaderTitle from '../../../../components/utils/BigHeaderTitle.component';
import Empty from '../../../../components/utils/Empty.component';
import PaddingContent from '../../../../components/utils/PaddingContent.component';
import RoundedPlusButton from '../../../../components/utils/RoundedPlusButton.component';
import SafeAreaViewDefault from '../../../../components/utils/SafeAreaViewLogin.component';
import { CarpoolContext } from '../../../../routes/homeRoutes/CarpoolRoutes';
import { LoginContext } from '../../../../routes/routes';

export default function Carpool({ navigation, route }) {
        const { loginInfo, setLoginInfo } = useContext(LoginContext);
        const { listOfCarpools } = useContext(CarpoolContext);
        const [isListOfCarpoolsEmpty, setIsListOfCarpoolsEmpty] = useState(listOfCarpools.length == 0);
        const [showPopup, setShowPopup] = useState(route.params?.showPopup);
        //const { userLogin } = route.params;
        
        useEffect(() => {
            setIsListOfCarpoolsEmpty(listOfCarpools.length == 0)
        }, [listOfCarpools])
        //console.log(userLogin)
        return (
            <SafeAreaViewDefault>
                <PaddingContent>
                    <BigHeaderTitle title={'Caronas'}/>
                    <RoundedPlusButton onPress={() => { navigation.navigate('ChoosePath') }} />
                    { showPopup && <CarpoolPopup setShowPopup={setShowPopup}/> }
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