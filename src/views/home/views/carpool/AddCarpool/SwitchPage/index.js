import { CommonActions } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AutoValueHeader from "../../../../../../components/addcarpool/AutoValueHeader.component";
import FixedValueHeader from "../../../../../../components/addcarpool/FixedValueHeader.component";
import FlatListAddCarpool from "../../../../../../components/addcarpool/FlatListAddCarpool.component";
import ButtonPrimaryDefault from "../../../../../../components/utils/ButtonPrimaryDefault.component";

export default function SwitchPage({ props }) {
    const { carpoolPrice, setListOfCarpools, listOfPeople, isLeftSelected, gasPrice, kmL, pathTitle, pathDistance, navigation } = props;
    const availablePeople = listOfPeople.filter((item) => {
        if (item.isParticipating || item.isDriver) return item
    });
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
    }, [fixedPrice]);

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
                        setListOfCarpools(oldArray => [...oldArray, 
                        { 
                            date: '31/07/2022',
                            data: [ { 
                            pathTitle: pathTitle, pathDistance: pathDistance, kmL: kmL, gasPrice: gasPrice,
                            listOfPeople: availablePeople 
                        },
                         ]
                        } ]);
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