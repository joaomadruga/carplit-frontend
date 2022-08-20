import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const LoginContent = styled.SafeAreaView`
  background-color: ${Constants.colors.gray[0]};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 65px;
`;

export default LoginContent;