import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import FlatListChooseGroup from "../../../../../components/choosegroup/FlatListChooseGroup.component";
import ChoosePathContent from "../../../../../components/choosepath/ChoosePathContent.component";
import FlatListChoosePath from "../../../../../components/choosepath/FlatListChoosePath.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import Empty from "../../../../../components/utils/Empty.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";

export default function ChooseGroup({ navigation, route }) {
    const [listOfPeople, setListOfPeople] = useState([
    {name: 'Zé', address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE', isParticipating: false, isDriver: true},
    {name: 'Pedro', address: 'Rua Um de Dois, 123, Tamarinasdgasgdeira, Recife - PE', isParticipating: false, isDriver: false}, 
    {name: 'Thaís', address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE', isParticipating: false, isDriver: false},
    {name: 'Gil', address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE', isParticipating: false, isDriver: false},
    {name: 'João', address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE', isParticipating: false, isDriver: false}
    ])
    const { pathTitle, pathDistance, kmL } = route.params;

    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <View style={{height: '100%', width: '100%'}}>
                    <FlatListChooseGroup listOfPeople={listOfPeople}/>
                    <ButtonPrimaryDefault title={"Continuar"} onPress={() => navigation.navigate('AddCarpool', { listOfPeople, pathTitle, pathDistance, kmL })} />
                </View>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}