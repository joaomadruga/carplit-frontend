import { CommonActions } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import AutoValueHeader from "../../../../../../components/addcarpool/AutoValueHeader.component";
import FixedValueHeader from "../../../../../../components/addcarpool/FixedValueHeader.component";
import FlatListAddCarpool from "../../../../../../components/addcarpool/FlatListAddCarpool.component";
import ButtonPrimaryDefault from "../../../../../../components/utils/ButtonPrimaryDefault.component";
import * as Store from "../../../../../../redux/store/store";
import * as Constants from "../../../../../../constants/utils/Constants";
import moment from 'moment';
import 'moment/locale/pt-br';
import { addCarpool } from "../../../../../../helper/carpools/utils";

const getActiveRouteState = function (route) {
    if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
        return route;
    }

    const childActiveRoute = route.routes[route.index];
    return getActiveRouteState(childActiveRoute);
};

export default function SwitchPage({ props }) {
    const { carpoolPrice, loginInfo, listOfCarpools, setListOfCarpools, tempListOfRiders, isLeftSelected, pathId, navigation, isSoloCarpool, setIsSoloCarpool } = props;
    const priceFuel = loginInfo.fuelPerLiter;
    const consumeFuel = loginInfo.averageConsumption;
    const availablePeople = tempListOfRiders.filter((item) => {
        if (item.isParticipating || item.isDriver) return item
    });
    const [isDisabled, setIsDisabled] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [fixedPrice, setFixedPrice] = useState("R$ 0,00");
    const totalPrice = fixedPrice.replace(/[$a-zA-Z.]/g, '').replace(',', '.') * (availablePeople.length - 1);
    const [splitedPrice, setSplitedPrice] = useState(carpoolPrice/(availablePeople.length - 1));
    const activeRoute = getActiveRouteState(navigation.getState());
    useEffect(() => {
        if(isLeftSelected && isEnabled) {
            const price = carpoolPrice/availablePeople.length;
            setSplitedPrice(price);
            availablePeople.map((item) => {
                item.price = price;
            });
        } else if (isLeftSelected && !isEnabled) {
            const price = carpoolPrice/(availablePeople.length - 1);
            setSplitedPrice(price);
            availablePeople.map((item, index) => {
                if (index > 0) {
                    item.price = price;
                } else {
                    item.price = 0
                }
            });
        }
    }, [isEnabled, isLeftSelected]);

    useEffect(() => {
        if (!isLeftSelected){
            const price = totalPrice / (availablePeople.length - 1);
            availablePeople.map((item, index) => {
                if (index > 0) { 
                    item.price = price;
                } else {
                    item.price = 0;
                }
            })
        }
    }, [fixedPrice, isLeftSelected]);

    useEffect(() => {
        setIsSoloCarpool(availablePeople.length === 1);
    }, [tempListOfRiders]);

    return (
            <>
                {
                    isLeftSelected 
                    ? <AutoValueHeader isSoloCarpool={isSoloCarpool} isEnabledState={{ isEnabled, setIsEnabled }}/>
                    : <FixedValueHeader fixedPriceState={{fixedPrice, setFixedPrice}}/>
                }
                {
                    isLeftSelected 
                    ? <FlatListAddCarpool totalPrice={isEnabled ? carpoolPrice - splitedPrice : carpoolPrice} carpoolPrice={carpoolPrice} isDisabled={!isEnabled} availablePeople={availablePeople} splitedPrice={splitedPrice}/>
                    : <FlatListAddCarpool totalPrice={totalPrice} carpoolPrice={carpoolPrice} isDisabled={true} availablePeople={availablePeople} splitedPrice={fixedPrice}/>
                }

                <ButtonPrimaryDefault
                    marginTop={43} 
                    marginBottom={30}
                    style={{backgroundColor: isDisabled ? Constants.colors.gray[700] : Constants.buttonConfig.Default.Primary.Small.BackgroundColor, marginBottom: 30}}
                    title={"Adicionar carona"}
                    disabled={isDisabled}
                    onPress={() => {
                        setIsDisabled(true);
                        const currentCarpool = { 
                            date: `${moment().locale("pt-br").format('dddd, DD/MM/YYYY')}`,
                            passengers: availablePeople.slice(1),
                            isFixedValue: !isLeftSelected,
                            isOwnerIncluded: isLeftSelected && isEnabled,
                            value: isLeftSelected ? splitedPrice : parseFloat(fixedPrice.replace('R$', '').replace(',', '.')),
                            path: pathId,
                            gas_price: priceFuel,
                            km_l: consumeFuel
                        }
                        const responseCarpools = (async () => { await addCarpool(loginInfo.authToken, currentCarpool)
                            .then((response) => {
                                setListOfCarpools(response.data);
                                setIsDisabled(false);
                                navigation.dispatch(
                                    CommonActions.reset({
                                    index: 0,
                                    routes: [{
                                        name: 'CarpoolScreen',
                                        params: { showPopup: true, 'isRegister': false }
                                    }],
                                    })
                                );
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                        })();
                        
                    } }
                        
                    />
            </>
    );
}