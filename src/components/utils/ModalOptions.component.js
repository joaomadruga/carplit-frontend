import { Portal } from "react-native-paper";
import { Modalize, useModalize } from 'react-native-modalize';
import { Text, View } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/utils/Constants";
import CloseIcon from "../../../assets/Settings/close-icon.png";
import ImageWrapper from "./ImageWrapper.component";
import ButtonSecondarySmallDefault from "../settings/ButtonSecondarySmall.component";
import ButtonSecundaryDefault from "./ButtonSecondaryDefault.component";
import { TouchableWithoutFeedback } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HeaderModal = styled.View`
    color: ${Constants.colors.gray[700]};
    padding: 18px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const HeaderTitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
    font-size: ${Constants.fontConfig.Body.Bold.FontSize};
    color: ${Constants.colors.gray[800]};
    text-align: center;
`

export default function ModalOptions({ modalizeRef, firstText, secondText, actionFirstButton, actionSecondButton }){
    const Close = () => modalizeRef.current?.close();
    const insets = useSafeAreaInsets();
    return (
        <Portal>
            <Modalize modalStyle={{backgroundColor: Constants.colors.gray[0], paddingLeft: 20, paddingRight: 20, borderTopLeftRadius: 24, borderTopRightRadius: 24}} adjustToContentHeight={true} ref={modalizeRef} >
                <HeaderModal>
                    <View style={{width: 24, height: 24}}/>
                    <HeaderTitle>Opções</HeaderTitle>
                    <TouchableWithoutFeedback onPress={() => Close()}>
                        <ImageWrapper source={CloseIcon} width={'24px'} height={'24px'}/>
                    </TouchableWithoutFeedback>
                </HeaderModal>
                
                <ButtonSecundaryDefault
                title={firstText}
                onPress={() => actionFirstButton()}
                underlayColor={Constants.buttonConfig.Ontouch.Secondary.Default.BackgroundColor}
                />
                
                <ButtonSecundaryDefault
                title={secondText}
                onPress={() => actionSecondButton()}
                underlayColor={Constants.buttonConfig.Ontouch.Secondary.Default.BackgroundColor}
                style={{marginTop: 8, marginBottom: insets.bottom + 20}}
                textColor={Constants.colors.support.Red[500]}
                />
            </Modalize>
        </Portal>
    )
}