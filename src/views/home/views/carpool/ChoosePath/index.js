import { useEffect, useState } from "react";
import { Text } from "react-native";
import ChoosePathContent from "../../../../../components/choosepath/ChoosePathContent.component";
import FlatListChoosePath from "../../../../../components/choosepath/FlatListChoosePath.component";
import ButtonPrimaryDefault from "../../../../../components/utils/ButtonPrimaryDefault.component";
import Empty from "../../../../../components/utils/Empty.component";
import PaddingContent from "../../../../../components/utils/PaddingContent.component";
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";


export default function ChoosePath({ navigation, route }) {
    const [listOfPaths, setListOfPaths] = useState([{titleText: 'Casa - UFPE (via Boa Viagem)', subtitleText: '16km'}, {titleText: 'Casa - UFPE (via Boa Viagem)', subtitleText: '16km'}])
    const [isListOfPathsEmpty, setIsListOfPathsEmpty] = useState(listOfPaths.length == 0)

    useEffect(() => {
        setIsListOfPathsEmpty(listOfPaths.length == 0)
    }, [listOfPaths])
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
                <ChoosePathContent justifyContent={isListOfPathsEmpty ? 'center' : 'flex-start'}>
                    {isListOfPathsEmpty && (<Empty title={"Você ainda não cadastrou trajetos!"} subtitle={"Toque no botão de adicionar + para cadastrar a distância dos seus trajetos"}/>)}
                    {!isListOfPathsEmpty && (
                    <>
                        <FlatListChoosePath listOfPaths={listOfPaths} navigation={navigation}/>
                    </>
                    )}
                </ChoosePathContent>
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}