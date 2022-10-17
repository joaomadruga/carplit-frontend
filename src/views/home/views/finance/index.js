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

const getActiveRouteState = function (route) {
    if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
        return route;
    }

    const childActiveRoute = route.routes[route.index];
    return getActiveRouteState(childActiveRoute);
}

export default function Finance({ navigation }) {
    const { loginInfo } = useContext(Store.LoginContext);
    const { passengersFinance, setPassengersFinance, listOfCarpools } = useContext(Store.HomeContext);
    const [value, setValue] = useState('15 dias');
    const [isLoading, setIsLoading] = useState(false);
    const activeRoute = getActiveRouteState(navigation.getState());
    const listOfDays = { 7: 7, 15: 15, 3: 3 * 30, 6: 6 * 30, 1: 365 };
    useEffect(() => {
        const currentValue = listOfDays[Number(value.match(/[0-9$]+/gm))];
        setIsLoading(true);
        const responseFinance = (async () => { await getFinance(loginInfo.authToken, currentValue)
        .then((response) => {
            setPassengersFinance(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })})();
    }, [value, activeRoute.name === "Finance"]);

    return (
        <SafeAreaView>
            <PaddingContent>
                {!isLoading && <HeaderFinanceDropdown valueState={{value, setValue}} />}
                <BigHeaderTitle title={'Finanças'} />
                {!isLoading &&
                <>
                    <HeaderFinanceHeader selectedValue={value} userReceived={passengersFinance?.passenger_trips?.user_received} cost={passengersFinance?.passenger_trips?.total_cost} saved={passengersFinance?.passenger_trips?.saved} rideBalance={passengersFinance?.passenger_trips?.ride_balance} />
                    <FlatListFinance passengersFinance={passengersFinance?.passenger_trips?.passengers} navigation={navigation}/>
                </>
                }
                {isLoading && <Loading style={{alignSelf: 'center', marginTop: 30}}/>}
            </PaddingContent>
        </SafeAreaView>
    );
}