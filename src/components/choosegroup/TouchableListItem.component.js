import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import { Dimensions, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import BottomLine from '../utils/BottomLine.component';

const TouchableListItemStyle = styled.TouchableOpacity`
    padding: 16px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    max-width: 90%;
`

export default function TouchableListItem({titleText, subtitleText, index, People,  ...props}){
    const [checkBox, setCheckBox] = useState(false);
    return (
        <>
            <TouchableListItemStyle {...props} onPress={() => {
                if (!People.isDriver) {
                    setCheckBox(!checkBox)
                    People.isParticipating = !People.isParticipating;
                }
            }}>
                <View>
                    <Title>{titleText}</Title>
                    <Subtitle>{subtitleText}</Subtitle>
                </View>
                <Checkbox.Android
                    status={checkBox || People.isDriver ? 'checked' : 'unchecked'}
                    disabled={People.isDriver ? true : false}
                    centered={true}
                    color={Constants.colors.primary[600]}
                />
            </TouchableListItemStyle>
            <BottomLine/>
        </>
    )
};