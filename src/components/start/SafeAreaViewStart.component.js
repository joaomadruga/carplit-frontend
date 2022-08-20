import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/constants";

const SafeAreaViewStart = styled.SafeAreaView`
    background-color: ${Constants.colors.gray[0]};
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;

export default SafeAreaViewStart;