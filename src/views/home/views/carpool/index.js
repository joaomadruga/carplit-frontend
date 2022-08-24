import { useContext, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import CarpoolContent from '../../../../components/carpool/CarpoolContent.component';
import Empty from '../../../../components/carpool/Empty.component';
import BigHeaderTitle from '../../../../components/utils/BigHeaderTitle.component';
import ImageWrapper from '../../../../components/utils/ImageWrapper.component';
import PaddingContent from '../../../../components/utils/PaddingContent.component';
import RoundedPlusButton from '../../../../components/utils/RoundedPlusButton.component';
import { LoginContext } from '../../../../routes/routes';


export default function Carpool() {
        const { loginInfo, setLoginInfo } = useContext(LoginContext);
        const [listOfCarpools, setListOfCarpools] = useState([])
        //const { userLogin } = route.params;
    
        //console.log(userLogin)
        return (
            <SafeAreaView>
                <PaddingContent>
                    <BigHeaderTitle title={'Caronas'}/>
                    <RoundedPlusButton/>
                    <CarpoolContent>
                        {listOfCarpools.length > 0 ? <Text>Mostrar lista</Text> : <Empty/>}
                    </CarpoolContent>
                </PaddingContent>
            </SafeAreaView>
    );
}