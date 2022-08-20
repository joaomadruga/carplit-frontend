import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/constants";

const TextSubtitleStart = styled.Text`
  font-family: ${Constants.fontConfig.Body.Regular.FontFamily};
  font-size: ${Constants.fontConfig.Body.Regular.FontSize};
  color: ${Constants.colors.gray[700]};
  width: 100%;
  text-align: center;
  padding: 0 20px;
`;

export default TextSubtitleStart;