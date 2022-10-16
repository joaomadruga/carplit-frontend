import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const ButtonPrimaryDefaultStyle = styled.TouchableHighlight`
  background-color: ${Constants.buttonConfig.Default.Primary.Default.BackgroundColor};
  border-radius: ${Constants.buttonConfig.Default.Primary.Default.Radius};
  width: ${Constants.buttonConfig.Default.Primary.Default.Width};
  height: ${Constants.buttonConfig.Default.Primary.Default.Height};
  margin: ${props => props.margin ? `${props.margin}px` : 0};
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : 0};
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0};
  margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : 0};
  margin-right: ${props => props.marginRight ? `${props.marginRight}px` : 0};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
`;

const ButtonText = styled.Text`
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${Constants.buttonConfig.Default.Primary.Default.Color};
`;

export default function ButtonPrimaryDefault({ title, ...props }) {
    return (
        <ButtonPrimaryDefaultStyle underlayColor={Constants.buttonConfig.Ontouch.Primary.Default.BackgroundColor} {...props}>
            <ButtonText>{title}</ButtonText>
        </ButtonPrimaryDefaultStyle>
    );
}