import { CommonActions } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import AutoValueHeader from "../../../../../../components/addcarpool/AutoValueHeader.component";
import FixedValueHeader from "../../../../../../components/addcarpool/FixedValueHeader.component";
import FlatListAddCarpool from "../../../../../../components/addcarpool/FlatListAddCarpool.component";
import ButtonPrimaryDefault from "../../../../../../components/utils/ButtonPrimaryDefault.component";
import { HomeContext } from "../../../../../../routes/homeRoutes";

export default function SwitchPage({ props }) {
    const { carpoolPrice, setListOfCarpools, tempListOfRiders, isLeftSelected, gasPrice, kmL, pathTitle, pathDistance, navigation } = props;
    const availablePeople = tempListOfRiders.filter((item) => {
        if (item.isParticipating || item.isDriver) return item
    });
    const { listOfRiders, setListOfRiders } = useContext(HomeContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const [fixedPrice, setFixedPrice] = useState("R$ 0,00");
    const totalPrice = fixedPrice.replace(/[$a-zA-Z.]/g, '').replace(',', '.') * (availablePeople.length - 1);
    const [splitedPrice, setSplitedPrice] = useState(carpoolPrice/(availablePeople.length - 1));
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

    return (
            <>
                {
                    isLeftSelected 
                    ? <AutoValueHeader isEnabledState={{ isEnabled, setIsEnabled }}/>
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
                    title={"Adicionar carona"} 
                    onPress={() => {
                        const currentCarpool = { 
                            date: '31/07/2022',
                            data: [ { 
                            pathTitle: pathTitle, pathDistance: pathDistance, kmL: kmL, gasPrice: gasPrice,
                            listOfRiders: availablePeople 
                        }]
                        }

                        listOfRiders.forEach((item) => {
                            //this do not allows people with the same name, should be fixed with ID in backend and changed here later.
                            const index = availablePeople.findIndex(e => e.name === item.name);
                            if (index > -1) {
                                item.carpoolHistory.push({ ...availablePeople[index], date: currentCarpool.date });
                            }
                        })
                        setListOfCarpools(oldArray => [...oldArray, currentCarpool]);
                        navigation.dispatch(
                            CommonActions.reset({
                            index: 0,
                            routes: [{
                                name: 'CarpoolScreen',
                                params: { showPopup: true }
                            }],
                            })
                        ) } }
                    />
            </>
    );
}