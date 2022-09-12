import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native';
import ListOfRiders from '../../../../../components/riders/ListOfRiders.component';
import RidersContent from '../../../../../components/riders/RidersContent.component';
import Empty from '../../../../../components/utils/Empty.component';
import PaddingContent from '../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../../../../components/utils/SafeAreaViewLogin.component';
import * as Constants from '../../../../../constants/utils/Constants';
import { HomeContext } from '../../../../../routes/homeRoutes';

export default function Riders({ navigation, route }) {
        const { listOfRiders } = useContext(HomeContext);
        const [isListOfRidersEmpty, setIsListOfRidersEmpty] = useState(listOfRiders.length == 0);

        useEffect(() => {
            setIsListOfRidersEmpty(listOfRiders.length == 0)
        }, [listOfRiders]);

        return (
            <SafeAreaViewDefault>
                <ScrollView contentContainerStyle={{flexGrow: 1}} style={{backgroundColor: Constants.colors.gray[0]}}>
                    <PaddingContent>
                        <RidersContent justifyContent={isListOfRidersEmpty ? 'center' : 'flex-start'}>
                            {isListOfRidersEmpty && <Empty title={"Você ainda não registrou passageiros!"} subtitle={"Toque no botão de adicionar + para registrar passageiros."}/>}
                            {!isListOfRidersEmpty && <ListOfRiders listOfRiders={listOfRiders} navigation={navigation} />}
                        </RidersContent>
                    </PaddingContent>
                </ScrollView>
            </SafeAreaViewDefault>
    );
}