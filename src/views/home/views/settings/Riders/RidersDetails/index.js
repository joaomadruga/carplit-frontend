import { useContext, useEffect, useRef, useState } from "react";
import { Button, Modal, ScrollView, Text, TouchableWithoutFeedback, View, LogBox } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { FinanceView } from "../../../../../../components/ridersdetails/FinanceView.component";
import { HeaderText } from "../../../../../../components/ridersdetails/HeaderText.component";
import ListHistoryCarpools from "../../../../../../components/ridersdetails/ListHistoryCarpools.component";
import ModalOptionsRidersDetails from "../../../../../../components/ridersdetails/ModalOptionsRidersDetails.component";
import Loading from "../../../../../../components/utils/Loading.component";
import ModalOptions from "../../../../../../components/utils/ModalOptions.component";
import ModalPopup from "../../../../../../components/utils/ModalPopup.component";
import NotificationPopup from "../../../../../../components/utils/NotificationPopup.component";
import PaddingContent from "../../../../../../components/utils/PaddingContent.component";
import * as Constants from "../../../../../../constants/utils/Constants";
import { deleteAllCarpools, deleteRider, getHistoryCarpools } from "../../../../../../helper/riders/utils";
import * as Store from "../../../../../../redux/store/store";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const getActiveRouteState = function (route) {
    if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
        return route;
    }

    const childActiveRoute = route.routes[route.index];
    return getActiveRouteState(childActiveRoute);
}

export default function RidersDetails({ route, navigation }) {
    const { index, ref, id } = route.params;
    const { loginInfo } = useContext(Store.LoginContext);
    const { listOfRiders, setListOfRiders } = useContext(Store.HomeContext);
    const [currentRiderFinance, setCurrentRiderFinance] = useState({totalDebt: 0, totalPaid: 0});
    const [currentRider, setCurrentRider] = useState({name: '', address: ''});
    const [modalVisible, setModalVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false);
    const [isAllCarpoolButtonDisabled, setIsAllCarpoolButtonDisabled] = useState(false);
    const [modalAllCarpoolVisible, setModalAllCarpoolVisible] = useState(false);
    const [currentCarpoolHistory, setCurrentCarpoolHistory] = useState([]);
    const [errorMessage, setErrorMessage] = useState("Ops... algo deu errado. Tente novamente mais tarde.");
    const [isLoading, setIsLoading] = useState(true);
    const activeRoute = getActiveRouteState(navigation.getState());

    const CloseModalOption = () => ref.current?.close();
    const onSubmitDelete = async () => {
        setIsDeleteButtonDisabled(true);
        await deleteRider(loginInfo.authToken, id)
        .then ((response) => {
            setListOfRiders(listOfRiders.filter((item, filterIndex) => { return item.isDriver || filterIndex !== index }));
            setModalVisible(false);
            setTimeout(() => navigation.navigate('RidersScreen', { index }), 500);
        })
        .catch((error) => {
            if (error.response.status === 403) setErrorMessage("Não foi possível deletar pois esse usuário já está contido em uma carona.");
            setModalVisible(false);
            setShowPopup(true);
            setTimeout(() => setErrorMessage("Ops... algo deu errado. Tente novamente mais tarde."), 4000);
        });
        setIsDeleteButtonDisabled(false);
    };
    
    const onSubmitDeleteAllCarpools = async () => {
        setIsAllCarpoolButtonDisabled(true);
        const updateObj = { passenger_id: id }
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

    useEffect(() => {
        setIsLoading(true);
        const responseHistoryCarpools = (async () => await getHistoryCarpools(loginInfo.authToken, id)
        .then((response) => {
            setCurrentRider({name: response.data.obj.passenger.name, address: response.data.obj.passenger.address})
            setCurrentRiderFinance({totalDebt: response.data.obj.totalDebt, totalPaid: response.data.obj.totalPaid})
            setCurrentCarpoolHistory(response.data.obj.tripHistory);
            setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        }))();
    }, [activeRoute.name === "RidersDetails"]);
    return (
        <>
            <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
                <PaddingContent>
                    {!isLoading ?
                    <>
                        <HeaderText name={currentRider.name} address={currentRider.address}/>
                        <FinanceView userReceived={currentRiderFinance.totalPaid} totalPending={currentRiderFinance.totalDebt}/>
                        <ListHistoryCarpools navigation={navigation} currentCarpoolHistory={currentCarpoolHistory} setCurrentCarpoolHistory={setCurrentCarpoolHistory} id={id} authToken={loginInfo.authToken}/>
                    </>
                    : <Loading />}
                    { showPopup && <NotificationPopup title={errorMessage} setShowPopup={setShowPopup} bottom={'20px'}/> }
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