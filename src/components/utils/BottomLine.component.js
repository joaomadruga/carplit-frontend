import { Dimensions } from "react-native";
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const LineStyle = styled.View`
    border-bottom-color: ${Constants.colors.gray[100]};
    border-bottom-style: solid;
    border-bottom-width: 1px;
    margin-left: -20px;
`

export default function BottomLine({ marginTop, ...props }) {
    const windowWidth = Dimensions.get('window').width;
    return (
        <LineStyle style={{width: windowWidth, marginTop: marginTop}} {...props}/>
    )
}