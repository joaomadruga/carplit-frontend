import { useContext, useState } from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FlatListFinance from '../../../../components/finance/FlatListFinance.component';
import HeaderFinanceDropdown from '../../../../components/finance/HeaderFinanceDropdown.component';
import HeaderFinanceHeader from '../../../../components/finance/HeaderFinanceHeader.component';
import BigHeaderTitle from '../../../../components/utils/BigHeaderTitle.component';
import PaddingContent from '../../../../components/utils/PaddingContent.component';
import * as Store from "../../../../redux/store/store";

export default function Finance({ navigation }) {
    const { listOfRiders } = useContext(Store.HomeContext);
    const [value, setValue] = useState(null);
    return (
        <SafeAreaView>
            <PaddingContent>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', zIndex: 999}}>
                    <BigHeaderTitle title={'Finanças'}/>
                    <HeaderFinanceDropdown valueState={{value, setValue}}/>
                </View>
                <HeaderFinanceHeader selectedValue={value} />
                <FlatListFinance listOfRiders={listOfRiders} navigation={navigation}/>
            </PaddingContent>
        </SafeAreaView>
    );
}