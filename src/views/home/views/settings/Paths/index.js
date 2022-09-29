import { useContext, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View, TouchableHighlight, ScrollView } from 'react-native';
import Empty from '../../../../../components/utils/Empty.component';
import PaddingContent from '../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from '../../../../../components/utils/SafeAreaViewLogin.component';
import * as Constants from '../../../../../constants/utils/Constants';
import ListOfPaths from '../../../../../components/settingPaths/ListOfPaths.component';
import PathsContent from '../../../../../components/settingPaths/PathsContent.component';
import { Modalize, useModalize } from 'react-native-modalize';
import ModalPopup from '../../../../../components/utils/ModalPopup.component';
import * as Store from "../../../../../redux/store/store";
import ModalOptions from '../../../../../components/utils/ModalOptions.component';

export default function Paths({ navigation, route }) {
        const { listOfPaths, setListOfPaths } = useContext(Store.HomeContext);
        const [isListOfPathsEmpty, setIsListOfPathsEmpty] = useState(listOfPaths.length == 0);
        const [modalVisible, setModalVisible] = useState(false);
        const [currentItem, setCurrentItem] = useState({
            index: 0,
            id: undefined
        });
        const { ref, open, close } = useModalize();
        const CloseModalOption = () => ref.current?.close();
        useEffect(() => {
            setIsListOfPathsEmpty(isListOfPathsEmpty.length == 0);
        }, [listOfPaths]);

        return (
            <SafeAreaViewDefault>
                <ScrollView contentContainerStyle={{flexGrow: 1}} style={{backgroundColor: Constants.colors.gray[0]}}>
                    <PaddingContent>
                        <PathsContent justifyContent={isListOfPathsEmpty ? 'center' : 'flex-start'}>
                            {isListOfPathsEmpty && <Empty title={"Você ainda não cadastrou trajetos!"} subtitle={"Toque no botão de adicionar + para cadastrar a distância dos seus trajetos."}/>}
                            {!isListOfPathsEmpty && <ListOfPaths listOfPaths={listOfPaths} navigation={navigation} open={open} setCurrentItem={setCurrentItem} />}
                        </PathsContent>
                    </PaddingContent>
                </ScrollView>
                <ModalOptions
                    modalizeRef={ref} 
                    firstText={`Editar trajeto`} 
                    secondText={`Excluir trajeto`}
                    actionFirstButton={() => { CloseModalOption(), navigation.navigate('EditPath', { currentItem }) }}
                    actionSecondButton={() => { CloseModalOption(), setModalVisible(true) }}
                />
                <ModalPopup 
                    title={`Excluir "${listOfPaths.length === 0 ? '' : listOfPaths[currentItem.index].pathTitle}"?`} 
                    subtitle={`O nome e distância do trajeto serão excluídos permanentemente.`} 
                    leftButtonTitle={"Cancelar"}
                    rightButtonTitle={"Excluir"}
                    rightButtonPressed={() => { setListOfPaths(listOfPaths.filter((item, filterIndex) => { return filterIndex !== currentItem.index })), setModalVisible(false) }}
                    modalState={{ modalVisible, setModalVisible }}
                />
            </SafeAreaViewDefault>
    );
}