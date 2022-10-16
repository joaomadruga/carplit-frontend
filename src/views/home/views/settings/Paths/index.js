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
import { deletePath } from '../../../../../helper/path/utils';

export default function Paths({ navigation, route }) {
        const { listOfPaths, setListOfPaths } = useContext(Store.HomeContext);
        const { loginInfo } = useContext(Store.LoginContext);
        const [isListOfPathsEmpty, setIsListOfPathsEmpty] = useState(listOfPaths.length === 0);
        const [isDisabled, setIsDisabled] = useState(false);
        const [modalVisible, setModalVisible] = useState(false);
        const [showPopup, setShowPopup] = useState(false);
        const [currentItem, setCurrentItem] = useState({
            index: 0,
            id: undefined
        });
        const { ref, open, close } = useModalize();
        const CloseModalOption = () => ref.current?.close();
        useEffect(() => {
            setIsListOfPathsEmpty(listOfPaths.length === 0);
        }, [listOfPaths]);

        const responseDeletePath = async () => {
            setIsDisabled(true);
            await deletePath(loginInfo.authToken, currentItem.id)
            .then ((response) => {
                setListOfPaths(listOfPaths.filter((item, filterIndex) => { return filterIndex !== currentItem.index }));
                setModalVisible(false);
            })
            .catch((error) => {
                console.log(error);
                setShowPopup(true);
            });
            setIsDisabled(false);
        }

        return (
            <SafeAreaViewDefault>
                <ScrollView contentContainerStyle={{flexGrow: 1}} style={{backgroundColor: Constants.colors.gray[0]}}>
                    <PaddingContent>
                        <PathsContent justifyContent={isListOfPathsEmpty ? 'center' : 'flex-start'}>
                            {isListOfPathsEmpty && <Empty title={"Você ainda não cadastrou trajetos!"} subtitle={"Toque no botão de adicionar + para cadastrar a distância dos seus trajetos."}/>}
                            {!isListOfPathsEmpty && <ListOfPaths listOfPaths={listOfPaths} navigation={navigation} open={open} setCurrentItem={setCurrentItem} />}
                        </PathsContent>
                        { showPopup && <NotificationPopup title={"Algo errado aconteceu, tente novamente mais tarde."} setShowPopup={setShowPopup} bottom={'60px'}/> }
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
                    title={`Excluir "${listOfPaths.length === 0 ? '' : listOfPaths[currentItem.index].title}"?`} 
                    subtitle={`O nome e distância do trajeto serão excluídos permanentemente.`} 
                    leftButtonTitle={"Cancelar"}
                    rightButtonTitle={"Excluir"}
                    rightButtonPressed={() => { responseDeletePath() }}
                    modalState={{ modalVisible, setModalVisible }}
                    rightButtonDisabled={isDisabled}
                />
            </SafeAreaViewDefault>
    );
}