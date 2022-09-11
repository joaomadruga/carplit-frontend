import { ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/utils/Constants";
import Modal from "react-native-modal";
import ButtonSecondarySmall from "./ButtonSecondarySmall.component";
import ButtonPrimarySmall from "./ButtonPrimarySmall.component";

const ModalView = styled.View`
    flex: 1;
`

const BackgroundModalView = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

const PopupBackgroundView = styled.View`
    background-color: ${Constants.colors.gray[0]};
    padding: 24px;
    border-radius: 4px;
    align-self: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Bold.FontFamily};
    font-size: ${Constants.fontConfig.H3.Bold.FontSize};
    color: ${Constants.colors.gray[800]};
    margin-bottom: 9px;
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-bottom: 24px;
`
export default function ModalPopup({ modalState, title, subtitle, leftButtonTitle, rightButtonTitle, rightButtonPressed, rightButtonDisabled }) {
    const { modalVisible, setModalVisible } = modalState;
    return (
        <View>
            <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <PopupBackgroundView>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                            <View style={{width: '50%'}}>
                                <ButtonSecondarySmall 
                                underlayColor={Constants.buttonConfig.Ontouch.Secondary.Small.BackgroundColor} 
                                style={{marginRight: 4}}
                                title={leftButtonTitle}
                                onPress={() => setModalVisible(false)}/>
                            </View>
                            <View style={{width: '50%'}}>
                                <ButtonPrimarySmall 
                                underlayColor={Constants.buttonConfig.Ontouch.Primary.Small.BackgroundColor}
                                style={{marginLeft: 4, backgroundColor: rightButtonDisabled ? Constants.colors.gray[700] : Constants.buttonConfig.Default.Primary.Small.BackgroundColor}}
                                title={rightButtonTitle}
                                disabled={rightButtonDisabled}
                                onPress={() => rightButtonPressed()}/>
                            </View>
                        </View>
                    </PopupBackgroundView>
                </View>
            </Modal>
        </View>
    )
}