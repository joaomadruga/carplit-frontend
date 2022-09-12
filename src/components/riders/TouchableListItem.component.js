import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import BottomLine from '../utils/BottomLine.component';

const TouchableListItemStyle = styled.TouchableOpacity`
    padding-top: 16px;
`

const Title = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[800]};
`

const Subtitle = styled.Text`
    font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
    font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
    color: ${Constants.colors.gray[700]};
    margin-top: 4px;
`

export default function TouchableListItem({name, index, ...props}){
    return (
        <TouchableListItemStyle {...props}>
            <Title>{name}</Title>
            <Subtitle>Toque para ver detalhes</Subtitle>
            <BottomLine marginTop={16} />
        </TouchableListItemStyle>
    )
};