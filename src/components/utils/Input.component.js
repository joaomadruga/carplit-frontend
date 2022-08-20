import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/constants";

const InputStyle = styled.TextInput`
  background-color: ${Constants.inputConfig.Default.BackgroundColor};
  border-radius: ${Constants.inputConfig.Default.Radius};
  width: ${Constants.inputConfig.Default.Width};
  height: ${Constants.inputConfig.Default.Height};
  font-size: ${Constants.fontConfig.Body.Medium.FontSize};
  font-family: ${Constants.fontConfig.Body.Medium.FontFamily};
  padding: ${Constants.inputConfig.Default.Padding};
  color: ${Constants.inputConfig.Ontouch.Color};
  margin: ${props => props.margin ? `${props.margin}px` : 0};
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : 0};
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0};
  margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : 0};
  margin-right: ${props => props.marginRight ? `${props.marginRight}px` : 0};
`;

export default function Input({ placeholder, ...props }) {
  return <InputStyle placeholder={placeholder} {...props} placeholderTextColor={Constants.inputConfig.Default.Color}/>;
}