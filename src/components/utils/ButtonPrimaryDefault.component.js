import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/constants";

const ButtonPrimaryDefaultStyle = styled.TouchableHighlight`
  background-color: ${Constants.buttonConfig.Default.Primary.Default.BackgroundColor};
  border-radius: ${Constants.buttonConfig.Default.Primary.Default.Radius};
  width: ${Constants.buttonConfig.Default.Primary.Default.Width};
  height: ${Constants.buttonConfig.Default.Primary.Default.Height};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${Constants.buttonConfig.Default.Primary.Default.Color};
`;

export default function ButtonPrimaryDefault({ title, ...props }) {
    return (
        <ButtonPrimaryDefaultStyle {...props}>
            <ButtonText>{title}</ButtonText>
        </ButtonPrimaryDefaultStyle>
    );
}