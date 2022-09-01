import { useEffect, useState } from "react";
import AutoValueHeader from "../../../../../../components/addcarpool/AutoValueHeader.component";
import FixedValueHeader from "../../../../../../components/addcarpool/FixedValueHeader.component";
import FlatListAddCarpool from "../../../../../../components/addcarpool/FlatListAddCarpool.component";

export default function SwitchPage({ carpoolPrice, listOfPeople, isLeftSelected }) {
    const filterListOfPeople = () => { return listOfPeople.filter((item) => {
        if (item.isParticipating || item.isDriver) return item
    }) };
    const [isEnabled, setIsEnabled] = useState(false);
    const [fixedPrice, setFixedPrice] = useState("R$ 0,00");
    const availablePeople = filterListOfPeople();
    const totalPrice = fixedPrice.replace(/[$a-zA-Z.]/g, '').replace(',', '.') * (availablePeople.length - 1);
    const [splitedPrice, setSplitedPrice] = useState(carpoolPrice/(availablePeople.length - 1));
    
    useEffect(() => {
        if(isEnabled) {
            setSplitedPrice(carpoolPrice/availablePeople.length)
        } else {
            setSplitedPrice(carpoolPrice/(availablePeople.length - 1))
        }
    }, [isEnabled])

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
            </>
    );
}