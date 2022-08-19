import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const InputStyle = styled.TextInput`
  background-color: ${Constants.inputConfig.Default.BackgroundColor};
  border-radius: ${Constants.inputConfig.Default.Radius};
  width: ${Constants.inputConfig.Default.Width};
  height: ${Constants.inputConfig.Default.Height};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
`;

export default function Input({ placeholder }) {
  return <InputStyle placeholder={placeholder} placeholderTextColor={Constants.inputConfig.Default.Color}/>;
}