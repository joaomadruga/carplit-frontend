import { useContext, useEffect, useRef, useState } from "react";
import { Button, Modal, ScrollView, Text, TouchableWithoutFeedback, View, LogBox } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { HeaderText } from "../../../../../../components/ridersdetails/HeaderText.component";
import ListHistoryCarpools from "../../../../../../components/ridersdetails/ListHistoryCarpools.component";
import ModalOptions from "../../../../../../components/utils/ModalOptions.component";
import ModalPopup from "../../../../../../components/utils/ModalPopup.component";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import * as Constants from "../../../../../../constants/utils/Constants";
import { HomeContext } from "../../../../../../routes/homeRoutes";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

export default function RidersDetails({ route, navigation }) {
    const { index, ref } = route.params;
    const { listOfRiders, setListOfRiders } = useContext(HomeContext);
    const [currentRider, setCurrentRider] = useState(listOfRiders[index]);
    const [modalVisible, setModalVisible] = useState(false);
    const CloseModalOption = () => ref.current?.close();
    
    return (
        <>
            <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
                <PaddingContent>
                    <HeaderText name={currentRider.name} address={currentRider.address}/>
                    <ListHistoryCarpools carpoolHistory={currentRider.carpoolHistory}/>
                </PaddingContent>
            </ScrollView>
            <ModalOptions 
            modalizeRef={ref} 
            firstText={`Editar "${currentRider.name}"`} 
            secondText={`Excluir "${currentRider.name}"`}
            actionFirstButton={() => { CloseModalOption(), navigation.navigate('EditRiders', { index }) }}
            actionSecondButton={() => { CloseModalOption(), setModalVisible(true) }}
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
        </>
    );
}