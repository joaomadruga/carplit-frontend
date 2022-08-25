import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight } from 'react-native';
import CarpoolContent from '../../../../components/carpool/CarpoolContent.component';
import DateText from '../../../../components/carpool/DateText.component';
import Empty from '../../../../components/carpool/Empty.component';
import FlatListCarpool from '../../../../components/carpool/FlatListCarpool.component';
import TouchableListItem from '../../../../components/carpool/TouchableListItem.component';
import BigHeaderTitle from '../../../../components/utils/BigHeaderTitle.component';
import ImageWrapper from '../../../../components/utils/ImageWrapper.component';
import PaddingContent from '../../../../components/utils/PaddingContent.component';
import RoundedPlusButton from '../../../../components/utils/RoundedPlusButton.component';
import { LoginContext } from '../../../../routes/routes';

export default function Carpool() {
        const { loginInfo, setLoginInfo } = useContext(LoginContext);
        const [listOfCarpools, setListOfCarpools] = useState([])
        const [isListOfCarpoolsEmpty, setIsListOfCarpoolsEmpty] = useState(listOfCarpools.length == 0)
        //const { userLogin } = route.params;

        useEffect(() => {
            setIsListOfCarpoolsEmpty(listOfCarpools.length == 0)
        }, [listOfCarpools])
        //console.log(userLogin)
        return (
            <SafeAreaView>
                <PaddingContent>
                    <BigHeaderTitle title={'Caronas'}/>
                    <RoundedPlusButton onPress={() => {setListOfCarpools([...listOfCarpools, 
                    {
                        date: `${parseInt(Math.random() * (31 - 1) + 1)}/07/2002`,
                        data: [ 
                        { titleText: 'Casa - UFPE (via Boa Viagem)', subtitleText: `${parseInt(Math.random() * (4 - 1) + 1)} pessoas + você` }, 
                        { titleText: 'Casa - UFPE (via Boa Viagem)', subtitleText: `${parseInt(Math.random() * (4 - 1) + 1)} pessoas + você` }
                    ]}
                    ])}}/>
                    <CarpoolContent justifyContent={isListOfCarpoolsEmpty ? 'center' : 'flex-start'}>
                        {isListOfCarpoolsEmpty && (<Empty/>)}
                        {!isListOfCarpoolsEmpty && (
                        <>
                            <FlatListCarpool listOfCarpools={listOfCarpools}/>
                        </>
                        )}
                    </CarpoolContent>
                </PaddingContent>
            </SafeAreaView>
    );
}