import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import FlatListChooseGroup from "../../../../../components/choosegroup/FlatListChooseGroup.component";
import ChoosePathContent from "../../../../../components/choosepath/ChoosePathContent.component";
import FlatListChoosePath from "../../../../../components/choosepath/FlatListChoosePath.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import Empty from "../../../../../components/utils/Empty.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";


export default function ChooseGroup() {
    const [listOfPeople, setListOfPeople] = useState([{name: 'Pedro', address: 'Rua Um de Dois, 123, Tamarinasdgasgdeira, Recife - PE'}, 
    {name: 'Zé', address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE'},
    {name: 'Thaís', address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE'},
    {name: 'Gil', address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE'},
    {name: 'João', address: 'Rua Um de Dois, 123, Tamarineira, Recife - PE'}
    ])
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <View style={{height: '100%', width: '100%'}}>
                    <FlatListChooseGroup listOfPeople={listOfPeople}/>
                    <ButtonPrimaryDefault title={"Continuar"} onPress={() => console.log('Pressed')} />
                </View>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}