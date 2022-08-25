import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import { Dimensions } from 'react-native';

const TouchableListItemStyle = styled.TouchableOpacity`
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${Constants.colors.gray[100]};
    margin: 0 -20px;
    padding: 16px 20px;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.H3.Medium.FontFamily};
    font-size: ${Constants.fontConfig.H3.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Body.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
`

export default function TouchableListItem({titleText, subtitleText, ...props}){
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <TouchableListItemStyle {...props} style={{width: windowWidth}}>
            <Title>{titleText}</Title>
            <Subtitle>{subtitleText}</Subtitle>
        </TouchableListItemStyle>
    )
};