import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import { Dimensions, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';

const TouchableListItemStyle = styled.View`
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${Constants.colors.gray[100]};
    margin: 0 -20px;
    padding: 16px 20px;
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

export default function TouchableListItem({titleText, subtitleText, ...props}){
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [checked, setChecked] = useState(false);

    return (
        <TouchableListItemStyle {...props} style={{width: windowWidth}}>
            <View>
                <Title>{titleText}</Title>
                <Subtitle>{subtitleText}</Subtitle>
            </View>
            <Checkbox.Android
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
                centered={true}
            />
        </TouchableListItemStyle>
    )
};