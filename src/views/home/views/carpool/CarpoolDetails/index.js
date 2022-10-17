import { useContext, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { HeaderText } from "../../../../../components/carpooldetails/HeaderText.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";
import * as Store from "../../../../../redux/store/store";
import * as Constants from "../../../../../constants/utils/Constants"
import FlatListChooseGroup from "../../../../../components/choosegroup/FlatListChooseGroup.component";
import FlatListAddCarpool from "../../../../../components/addcarpool/FlatListAddCarpool.component";
import ListCarpoolDetails from "../../../../../components/carpooldetails/ListCarpoolDetails.component";
import { deleteCarpool, getCarpoolDetails } from "../../../../../helper/carpools/utils";
import Loading from '../../../../../components/utils/Loading.component';
import ModalPopup from "../../../../../components/utils/ModalPopup.component";
import NotificationPopup from "../../../../../components/utils/NotificationPopup.component";

const onSubmitDeleteCarpool = async (authToken, carpoolId, setIsDeleteButtonDisabled, setShowPopup, navigation, setListOfCarpools, listOfCarpools, setModalCarpoolDetailsVisible) => {
    setIsDeleteButtonDisabled(true);
    await deleteCarpool(authToken, carpoolId)
    .then ((response) => {
        const filteredListOfCarpools = listOfCarpools.map((carpool) => {
            return carpool.data.filter((value) => {
                if (value._id !== carpoolId) {
                    return value
                }
            })
        });
        navigation.goBack();
        setListOfCarpools(filteredListOfCarpools[0]);
        setModalCarpoolDetailsVisible(false);
    })
    .catch((error) => {
        console.log(error);
        setShowPopup(true);
    });
    setIsDeleteButtonDisabled(false);
}

export default function CarpoolDetails({ route, navigation }) {
    const [availablePeople, setAvailablePeople] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    let driverPrice;
    const { listOfCarpools, loginInfo, modalCarpoolDetailsVisible, setModalCarpoolDetailsVisible, setListOfCarpools } = useContext(Store.HomeContext);
    const { columnIndex, rowIndex } = route.params;
    const currentCarpool = listOfCarpools[columnIndex]?.data[rowIndex];
    const { path, gas_price, km_l, value, isFixedValue, isOwnerIncluded } = currentCarpool;
    const carpoolPrice = value;

    useEffect(() => {
        setIsLoading(true);
        const responseCarpoolDetails = (async () => { await getCarpoolDetails(loginInfo.authToken, currentCarpool._id)
        .then((response) => {
            const passengers = response.data.slice(0);
            driverPrice = isFixedValue || !isOwnerIncluded ? 0 : (value/(passengers.length + 1));
            passengers.unshift({is_driver: true, price: driverPrice, hasPaid: true});
            let totalPrice = 0;
            passengers.map((passenger) => {
                if (passenger.hasPaid) totalPrice += passenger.price;
            });
            setIsLoading(false);
            setAvailablePeople(passengers);
            setTotalPrice(totalPrice);
        })
        .catch((error) => {
            console.log(error);
            setShowPopup(true);
        })})();
    }, []);

    return (
        <>
            <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
                <PaddingContent>
                    <HeaderText carpoolPrice={carpoolPrice} titleText={path.title} subtitleText={path.totalDistance} consumeFuel={km_l}/>
                    { !isLoading && <ListCarpoolDetails tripId={currentCarpool._id} totalPriceState={{ totalPrice, setTotalPrice }} availablePeople={availablePeople} carpoolPrice={carpoolPrice} isFixedValue={isFixedValue} isOwnerIncluded={isOwnerIncluded}/>}
                    { isLoading && <Loading  style={{marginTop: 20 }}/> }
                    { showPopup && <NotificationPopup title={"Ops... algo deu errado. Tente novamente mais tarde."} setShowPopup={setShowPopup} bottom={'20px'}/> }
                </PaddingContent>
            </ScrollView>
            <ModalPopup
            title={`Deseja excluir essa carona?`} 
            subtitle={`Essa ação é irreversível.`} 
            leftButtonTitle={"Cancelar"}
            rightButtonTitle={"Confirmar"}
            rightButtonDisabled={isDeleteButtonDisabled}
            rightButtonPressed={() => { onSubmitDeleteCarpool(loginInfo.authToken, currentCarpool._id, setIsDeleteButtonDisabled, setShowPopup, navigation, setListOfCarpools, listOfCarpools, setModalCarpoolDetailsVisible) }}
            modalState={{ modalVisible: modalCarpoolDetailsVisible, setModalVisible: setModalCarpoolDetailsVisible }}/>
        </>
    );
}