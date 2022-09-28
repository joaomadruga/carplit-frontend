import { useContext, useEffect, useRef, useState } from "react";
import { Button, Modal, ScrollView, Text, TouchableWithoutFeedback, View, LogBox } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { FinanceView } from "../../../../../../components/ridersdetails/FinanceView.component";
import { HeaderText } from "../../../../../../components/ridersdetails/HeaderText.component";
import ListHistoryCarpools from "../../../../../../components/ridersdetails/ListHistoryCarpools.component";
import ModalOptionsRidersDetails from "../../../../../../components/ridersdetails/ModalOptionsRidersDetails.component";
import ModalOptions from "../../../../../../components/utils/ModalOptions.component";
import ModalPopup from "../../../../../../components/utils/ModalPopup.component";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import * as Constants from "../../../../../../constants/utils/Constants";
import * as Store from "../../../../../../redux/store/store";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

export default function RidersDetails({ route, navigation }) {
    const { index, ref } = route.params;
    const { listOfRiders, setListOfRiders } = useContext(Store.HomeContext);
    const [currentRider, setCurrentRider] = useState(listOfRiders[index]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalAllCarpoolVisible, setModalAllCarpoolVisible] = useState(false);
    const CloseModalOption = () => ref.current?.close();
    return (
        <>
            <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
                <PaddingContent>
                    <HeaderText name={currentRider.name} address={currentRider.address}/>
                    <FinanceView carpoolHistory={currentRider.carpoolHistory}/>
                    <ListHistoryCarpools carpoolHistory={currentRider.carpoolHistory}/>
                </PaddingContent>
            </ScrollView>

            <ModalOptionsRidersDetails
                    modalizeRef={ref} 
                    firstText={`Marcar todas as caronas como "Pago" `} 
                    secondText={`Editar "${currentRider.name}"`}
                    thirdText={`Excluir "${currentRider.name}"`}
                    actionThirdButton={() => { CloseModalOption(), setModalVisible(true) }}
                    actionFirstButton={() => { setModalAllCarpoolVisible(true) }}
                    actionSecondButton={() => { CloseModalOption(), navigation.navigate('EditRiders', { index }) }}
            />

            <ModalPopup 
            title={`Excluir "${currentRider.name}"?`} 
            subtitle={`O cadastro de "${currentRider.name}" e todo seu histórico de caronas serão excluídos permanentemente.`} 
            leftButtonTitle={"Cancelar"}
            rightButtonTitle={"Excluir"}
            name={currentRider.name}
            rightButtonDisabled={currentRider.isDriver}
            rightButtonPressed={() => { setListOfRiders(listOfRiders.filter((item, filterIndex) => { return item.isDriver || filterIndex !== index })), setModalVisible(false), navigation.navigate('RidersScreen', { index }) }}
            modalState={{ modalVisible, setModalVisible }}/>

            <ModalPopup 
            title={`Deseja marcar todas as caronas de ${currentRider.name} como "Pago"?`} 
            subtitle={`Essa ação é irreversível.`} 
            leftButtonTitle={"Cancelar"}
            rightButtonTitle={"Confirmar"}
            name={currentRider.name}
            rightButtonDisabled={currentRider.isDriver}
            rightButtonPressed={() => { console.log('COLOCA PRA PAGAR TUDO') }}
            modalState={{ modalVisible: modalAllCarpoolVisible, setModalVisible: setModalAllCarpoolVisible }}/>
        </>
    );
}