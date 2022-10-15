import { useContext, useEffect, useRef, useState } from "react";
import { Button, Modal, ScrollView, Text, TouchableWithoutFeedback, View, LogBox } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { FinanceView } from "../../../../../../components/ridersdetails/FinanceView.component";
import { HeaderText } from "../../../../../../components/ridersdetails/HeaderText.component";
import ListHistoryCarpools from "../../../../../../components/ridersdetails/ListHistoryCarpools.component";
import ModalOptionsRidersDetails from "../../../../../../components/ridersdetails/ModalOptionsRidersDetails.component";
import ModalOptions from "../../../../../../components/utils/ModalOptions.component";
import ModalPopup from "../../../../../../components/utils/ModalPopup.component";
import NotificationPopup from "../../../../../../components/utils/NotificationPopup.component";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import * as Constants from "../../../../../../constants/utils/Constants";
import { deleteAllCarpools, deleteRider } from "../../../../../../helper/riders/utils";
import * as Store from "../../../../../../redux/store/store";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

export default function RidersDetails({ route, navigation }) {
    const { index, ref, id } = route.params;
    const { loginInfo } = useContext(Store.LoginContext);
    const { listOfRiders, setListOfRiders, passengersFinance } = useContext(Store.HomeContext);
    const [currentRider, setCurrentRider] = useState(listOfRiders[index]);
    const [modalVisible, setModalVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false);
    const [isAllCarpoolButtonDisabled, setIsAllCarpoolButtonDisabled] = useState(false);
    const [modalAllCarpoolVisible, setModalAllCarpoolVisible] = useState(false);
    const [currentCarpoolHistory, setCurrentCarpoolHistory] = useState([]);

    const CloseModalOption = () => ref.current?.close();
    const onSubmitDelete = async () => {
        setIsDeleteButtonDisabled(true);
        await deleteRider(loginInfo.authToken, currentRider._id)
        .then ((response) => {
            setListOfRiders(listOfRiders.filter((item, filterIndex) => { return item.isDriver || filterIndex !== index }));
            setModalVisible(false);
            setTimeout(() => navigation.navigate('RidersScreen', { index }), 500);
        })
        .catch((error) => {
            console.log(error);
            setShowPopup(true);
        });
        setIsDeleteButtonDisabled(false);
    };
    
    const onSubmitDeleteAllCarpools = async () => {
        setIsAllCarpoolButtonDisabled(true);
        const updateObj = { passenger_id: currentRider._id }
        await deleteAllCarpools(loginInfo.authToken, updateObj)
        .then ((response) => {
            currentCarpoolHistory.map((carpool) => {
                carpool.hasPaid = true;
            });
            CloseModalOption();
            setModalAllCarpoolVisible(false);
        })
        .catch((error) => {
            console.log(error);
            setShowPopup(true);
        });
        setIsAllCarpoolButtonDisabled(false);
    };
    return (
        <>
            <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
                <PaddingContent>
                    <HeaderText name={currentRider.name} address={currentRider.address}/>
                    <FinanceView carpoolHistory={currentRider.carpoolHistory} userReceived={passengersFinance?.passenger_trips?.user_received} totalPending={passengersFinance?.passenger_trips?.total_cost}/>
                    <ListHistoryCarpools navigation={navigation} currentCarpoolHistory={currentCarpoolHistory} setCurrentCarpoolHistory={setCurrentCarpoolHistory} id={currentRider._id} authToken={loginInfo.authToken}/>
                    { showPopup && <NotificationPopup title={"Ops... algo deu errado. Tente novamente mais tarde."} setShowPopup={setShowPopup} bottom={'20px'}/> }
                </PaddingContent>
            </ScrollView>

            <ModalOptionsRidersDetails
                    modalizeRef={ref} 
                    firstText={`Marcar todas as caronas como "Pago" `} 
                    secondText={`Editar "${currentRider.name}"`}
                    thirdText={`Excluir "${currentRider.name}"`}
                    actionThirdButton={() => { CloseModalOption(), setModalVisible(true) }}
                    actionFirstButton={() => { setModalAllCarpoolVisible(true) }}
                    actionSecondButton={() => { CloseModalOption(), navigation.navigate('EditRiders', { index, id }) }}
            />

            <ModalPopup 
            title={`Excluir "${currentRider.name}"?`} 
            subtitle={`O cadastro de "${currentRider.name}" e todo seu histórico de caronas serão excluídos permanentemente.`} 
            leftButtonTitle={"Cancelar"}
            rightButtonTitle={"Excluir"}
            name={currentRider.name}
            rightButtonDisabled={isDeleteButtonDisabled}
            rightButtonPressed={() => { onSubmitDelete() }}
            modalState={{ modalVisible, setModalVisible }}/>

            <ModalPopup 
            title={`Deseja marcar todas as caronas de ${currentRider.name} como "Pago"?`} 
            subtitle={`Essa ação é irreversível.`} 
            leftButtonTitle={"Cancelar"}
            rightButtonTitle={"Confirmar"}
            name={currentRider.name}
            rightButtonDisabled={isAllCarpoolButtonDisabled}
            rightButtonPressed={() => { onSubmitDeleteAllCarpools() }}
            modalState={{ modalVisible: modalAllCarpoolVisible, setModalVisible: setModalAllCarpoolVisible }}/>
        </>
    );
}