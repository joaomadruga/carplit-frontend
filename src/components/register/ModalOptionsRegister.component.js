import { Portal } from "react-native-paper";
import { Modalize, useModalize } from 'react-native-modalize';
import { Text, View } from "react-native";
import styled from "styled-components/native";
import * as Constants from "../../constants/utils/Constants";
import ButtonSecondarySmallDefault from "../settings/ButtonSecondarySmall.component";
import { TouchableWithoutFeedback } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ImageWrapper from "../utils/ImageWrapper.component";
import ButtonSecundaryDefault from "../utils/ButtonSecondaryDefault.component";
import RoundedConfirmButton from "../../../assets/Button/rounded-confirm-button.png";
import ButtonPrimaryDefault from "../utils/ButtonPrimaryDefault.component";

const HeaderModal = styled.View`
    color: ${Constants.colors.gray[700]};
    padding: 24px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Bold.FontFamily};
    font-size: ${Constants.fontConfig.H3.Bold.FontSize};
    color: ${Constants.colors.gray[800]};
    text-align: center;
    margin-bottom: 8px;
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[700]};
    text-align: center;
    margin-bottom: 48px;
`

export default function ModalOptionsRegisterHome({ modalizeRef, title, subtitle, textButton, buttonAction }){
    const insets = useSafeAreaInsets();
    return (
        <Portal>
            <Modalize openAnimationConfig={{ timing: { duration: 500 } }} closeAnimationConfig={{ timing: { duration: 500 } }} useNativeDriver={true} closeOnOverlayTap={true} modalStyle={{backgroundColor: Constants.colors.gray[0], paddingLeft: 20, paddingRight: 20, borderTopLeftRadius: 24, borderTopRightRadius: 24}} adjustToContentHeight={true} ref={modalizeRef} >
                <HeaderModal>
                    <TouchableWithoutFeedback>
                        <ImageWrapper source={RoundedConfirmButton} width={'72px'} height={'72px'}/>
                    </TouchableWithoutFeedback>
                </HeaderModal>
                
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>

                <ButtonPrimaryDefault 
                title={textButton}
                onPress={() => buttonAction()}
                style={{marginBottom: insets.bottom + 48}}
                />
            </Modalize>
        </Portal>
    )
}