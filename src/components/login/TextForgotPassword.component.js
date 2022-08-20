import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const TextForgotPassword = styled.Text`
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  color: ${Constants.colors.primary[900]};
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

export default TextForgotPassword;