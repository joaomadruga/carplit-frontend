import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const ButtonSecondaryDefaultStyle = styled.TouchableHighlight`
  background-color: ${Constants.buttonConfig.Default.Secondary.Default.BackgroundColor};
  border-radius: ${Constants.buttonConfig.Default.Secondary.Default.Radius};
  width: ${Constants.buttonConfig.Default.Secondary.Default.Width};
  height: ${Constants.buttonConfig.Default.Secondary.Default.Height};
  margin: ${props => props.margin ? `${props.margin}px` : 0};
  border-color: ${Constants.buttonConfig.Default.Secondary.Default.BorderColor};
  border-width: ${Constants.buttonConfig.Default.Secondary.Default.BorderWidth};
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
  color: ${Constants.buttonConfig.Default.Secondary.Default.Color};
`;

export default function ButtonSecundaryDefault({ title, ...props }) {
    return (
        <ButtonSecondaryDefaultStyle {...props}>
            <ButtonText>{title}</ButtonText>
        </ButtonSecondaryDefaultStyle>
    );
}