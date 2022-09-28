import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, View } from 'react-native';
import * as Constants from "../../constants/utils/Constants";

export default function HeaderFinanceDropdown({ valueState }){
    const [open, setOpen] = useState(false);
    const { value, setValue } = valueState;
    const [items, setItems] = useState([
        {label: '15 dias', value: '15 dias'},
        {label: '16 dias', value: '16 dias'},
        {label: '17 dias', value: '17 dias'},
        {label: '18 dias', value: '18 dias'}
    ]);
    const insets = useSafeAreaInsets();
    return (
        <View>
            <DropDownPicker
                style={{backgroundColor: Constants.colors.gray[100], borderWidth: 0, height: 36, width: 101, paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 12, marginTop: Platform.OS === 'android' ? insets.top + 32 : 32}}
                dropDownContainerStyle={{backgroundColor: Constants.colors.gray[0], marginTop: Platform.OS === 'android' ? insets.top + 32 : 32, width: 101, borderWidth: 0, borderRadius: 0, elevation: 11, shadowOffset: {width: 0, height: 5}, shadowOpacity: 1, shadowColor: "rgba(0, 0, 0, 0.25)", shadowRadius: 11, overflow: 'visible'}}
                textStyle={{color: Constants.colors.gray[700], fontSize: Constants.fontConfig.Body.Medium.FontSizeInt, fontFamily: Constants.fontConfig.Body.Regular.FontFamily}}
                listItemLabelStyle={{color: Constants.colors.gray[800], fontFamily: Constants.fontConfig.Body.Regular.FontFamily, fontSize: Constants.fontConfig.Body.Medium.FontSizeInt}}
                listItemContainerStyle={{borderBottomWidth: 1, borderBottomColor: Constants.colors.gray[400], borderStyle: "solid"}}
                //scrollViewProps={{contentContainerStyle: {flexGrow: 1}, style:{height: 36}}}
                open={open}
                maxHeight={120}
                value={value}
                items={items}
                setOpen={setOpen}
                placeholder={"Tempo"}
                setValue={setValue}
                setItems={setItems}
            />
        </View>
    )
}