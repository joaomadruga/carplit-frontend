import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const SafeAreaViewDefault = styled.SafeAreaView`
    background-color: ${Constants.colors.gray[0]};
    height: 100%;
    width: 100%;
    flex-grow: 1;
`;

export default SafeAreaViewDefault;