import { useContext, useEffect, useState } from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FlatListFinance from '../../../../components/finance/FlatListFinance.component';
import HeaderFinanceDropdown from '../../../../components/finance/HeaderFinanceDropdown.component';
import HeaderFinanceHeader from '../../../../components/finance/HeaderFinanceHeader.component';
import BigHeaderTitle from '../../../../components/utils/BigHeaderTitle.component';
import Loading from '../../../../components/utils/Loading.component';
import PaddingContent from '../../../../components/utils/PaddingContent.component';
import { getFinance } from '../../../../helper/finance/utils';
import * as Store from "../../../../redux/store/store";

export default function Finance({ navigation }) {
    const { loginInfo } = useContext(Store.LoginContext);
    const { passengersFinance, setPassengersFinance } = useContext(Store.HomeContext);
    const [value, setValue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [cost, setCost] = useState(0);
    const listOfDays = { 7: 7, 15: 15, 3: 3 * 30, 6: 6 * 30, 1: 365 };

    useEffect(() => {
        let currentValue = 99999;
        if (value) {
            currentValue = listOfDays[Number(value.match(/[0-9$]+/gm))];
        }
        setIsLoading(true);
        const responseFinance = (async () => { await getFinance(loginInfo.authToken, currentValue)
        .then((response) => {
            setPassengersFinance(response.data);
            let currentCost = 0;
            setCost(currentCost);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })})();
    }, [value]);

    return (
        <SafeAreaView>
            <PaddingContent>
                {!isLoading && <HeaderFinanceDropdown valueState={{value, setValue}} />}
                <BigHeaderTitle title={'Finanças'} />
                {!isLoading &&
                <>
                    <HeaderFinanceHeader selectedValue={value} userReceived={passengersFinance?.passenger_trips?.user_received} cost={passengersFinance?.passenger_trips?.total_cost} />
                    <FlatListFinance passengersFinance={passengersFinance?.passenger_trips?.passengers} navigation={navigation}/>
                </>
                }
                {isLoading && <Loading style={{alignSelf: 'center', marginTop: 30}}/>}
            </PaddingContent>
        </SafeAreaView>
    );
}