import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/constants";

const TextMainStart = styled.Text`
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  font-size: 36px;
  color: ${Constants.colors.primary[600]};
  line-height: 35px;
  width: 100%;
  text-align: center;
`;

export default TextMainStart;