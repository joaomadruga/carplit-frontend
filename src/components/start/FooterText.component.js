import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const FooterText = styled.Text`
  font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
  font-size: ${Constants.fontConfig.Body.Regular.FontSize};
  color: #9A9BA0;
  text-align: right;
  margin-right: 64px;
  margin-bottom: 26px;
`;

export default FooterText;