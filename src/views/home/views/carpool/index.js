import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import CarpoolContent from '../../../../components/carpool/CarpoolContent.component';
import SectionListCarpool from '../../../../components/carpool/SectionListCarpool.component';
import BigHeaderTitle from '../../../../components/utils/BigHeaderTitle.component';
import Empty from '../../../../components/utils/Empty.component';
import PaddingContent from '../../../../components/utils/PaddingContent.component';
import RoundedPlusButton from '../../../../components/utils/RoundedPlusButton.component';
import SafeAreaViewDefault from '../../../../components/utils/SafeAreaViewLogin.component';
import * as Store from "../../../../redux/store/store";
import NotificationPopup from '../../../../components/utils/NotificationPopup.component';
import ModalOptionsRegisterHome from '../../../../components/register/ModalOptionsRegister.component';
import { useModalize } from 'react-native-modalize';

export default function Carpool({ navigation, route }) {
        const { listOfCarpools } = useContext(Store.CarpoolContext);
        const [isListOfCarpoolsEmpty, setIsListOfCarpoolsEmpty] = useState(listOfCarpools.length == 0);
        const [showPopup, setShowPopup] = useState(route.params?.showPopup);
        const { ref, open, close } = useModalize();
        useEffect(() => {
            setIsListOfCarpoolsEmpty(listOfCarpools.length == 0);
        }, [listOfCarpools]);
        
        useLayoutEffect(() => { if (route.params?.isRegister) setTimeout(open, 700) }, []);

        return (
            <SafeAreaViewDefault>
                <PaddingContent>
                    <BigHeaderTitle title={'Caronas'}/>
                    <RoundedPlusButton onPress={() => { navigation.navigate('ChoosePath') }} />
                    { showPopup && <NotificationPopup title={"Trajeto adicionado com sucesso"} setShowPopup={setShowPopup} bottom={'20px'}/> }
                    <CarpoolContent justifyContent={isListOfCarpoolsEmpty ? 'center' : 'flex-start'}>
                        {isListOfCarpoolsEmpty && (<Empty title={"Você ainda não registrou caronas!"} subtitle={"Toque no botão de adicionar + para registar uma nova carona"}/>)}
                        {!isListOfCarpoolsEmpty && (
                        <>
                            <SectionListCarpool listOfCarpools={listOfCarpools} navigation={navigation}/>
                        </>
                        )}
                        <ModalOptionsRegisterHome
                            modalizeRef={ref}
                            title={`Cadastro finalizado com sucesso!`} 
                            subtitle={`Adicione passageiros e trajetos em Ajustes para começar a registrar suas caronas.`}
                            textButton={'Ir para a Tela de Ajustes'}
                            buttonAction={() => { close(), setTimeout(() => navigation.navigate('Settings'), 500) }}
                        />
                    </CarpoolContent>
                </PaddingContent>

            </SafeAreaViewDefault>
    );
}