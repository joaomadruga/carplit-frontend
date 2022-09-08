import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const BigHeaderTitleStyle = styled.Text`
    font-size: 32px;
    font-family: ${Constants.fontWeightConfig.Bold};
`;

export default function BigHeaderTitle({ title, ...props }) {
    const insets = useSafeAreaInsets();
    return (
      <BigHeaderTitleStyle style={{marginTop: Platform.OS === 'android' ? insets.top + 32 : 32}}>{title}</BigHeaderTitleStyle>
    );
}