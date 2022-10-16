import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const DateText = styled.Text`
    font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
    font-size: ${Constants.fontConfig.Body.Medium.FontSize};
    color: ${Constants.colors.gray[700]};
    background-color: white;
    padding-top: 24px;
    //align-self: flex-start;
`

export default DateText