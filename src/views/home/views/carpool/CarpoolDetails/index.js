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
import { getCarpoolDetails } from "../../../../../helper/carpools/utils";
import Loading from '../../../../../components/utils/Loading.component';

export default function CarpoolDetails({ route }) {
    const { listOfCarpools, loginInfo } = useContext(Store.HomeContext);
    const [isLoading, setIsLoading] = useState(false);
    const { columnIndex, rowIndex } = route.params;
    const currentCarpool = listOfCarpools[columnIndex].data[rowIndex];
    const { path, gas_price, km_l, value, isFixedValue, isOwnerIncluded } = currentCarpool;
    const [totalPrice, setTotalPrice] = useState(0);
    const carpoolPrice = value;
    const [availablePeople, setAvailablePeople] = useState([]);
    let driverPrice;
    useEffect(() => {
        setIsLoading(true);
        const responseCarpoolDetails = (async () => { await getCarpoolDetails(loginInfo.authToken, currentCarpool._id)
        .then((response) => {
            const passengers = response.data.slice(0);
            driverPrice = isFixedValue || !isOwnerIncluded ? 0 : (value/(passengers.length + 1));
            passengers.unshift({is_driver: true, price: driverPrice});
            setIsLoading(false);
            setAvailablePeople(passengers);
            setTotalPrice(driverPrice);
        })
        .catch((error) => {
            console.log(error);
        })})();
    }, []);

    
    

    return (
        <ScrollView style={{backgroundColor: Constants.colors.gray[0]}}>
            <PaddingContent>
                <HeaderText carpoolPrice={carpoolPrice} titleText={path.title} subtitleText={path.totalDistance} consumeFuel={km_l}/>
                { !isLoading && <ListCarpoolDetails tripId={currentCarpool._id} totalPriceState={{ totalPrice, setTotalPrice }} availablePeople={availablePeople} carpoolPrice={carpoolPrice} isFixedValue={isFixedValue} isOwnerIncluded={isOwnerIncluded}/>}
                { isLoading && <Loading  style={{marginTop: 20 }}/> }
            </PaddingContent>
        </ScrollView>
    );
}