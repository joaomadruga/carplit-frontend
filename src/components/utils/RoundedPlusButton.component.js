import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import RoundedPlusButtonImage from "../../../assets/Button/rounded-plus-button.png";
import ImageWrapper from './ImageWrapper.component';
import { Image, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
const RoundedPlusButtonStyle = styled.View`
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

export default function RoundedPlusButton({ ...props }) {
    return (
        <RoundedPlusButtonStyle>
            <FAB icon="plus"
            onPress={() => console.log('Pressed')}
            style={{ backgroundColor: Constants.colors.primary[600]}}
            color={Constants.colors.gray[0]}
            size="medium"
            />
        </RoundedPlusButtonStyle>
    )
}
