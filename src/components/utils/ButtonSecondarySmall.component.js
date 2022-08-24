import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import LogoutIcon from "../../../assets/Settings/logout-box-r-icon.png";
import ImageWrapper from './ImageWrapper.component';


const ButtonSecondarySmallStyle = styled.TouchableHighlight`
  background-color: ${Constants.buttonConfig.Default.Secondary.Default.BackgroundColor};
  border-radius: ${Constants.buttonConfig.Default.Secondary.Default.Radius};
  border-color: ${Constants.buttonConfig.Default.Secondary.Default.BorderColor};
  border-width: ${Constants.buttonConfig.Default.Secondary.Default.BorderWidth};
  padding: 18px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 64px;
`;

const ButtonText = styled.Text`
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${Constants.buttonConfig.Default.Secondary.Default.Color};
  margin-right: 8px;
`;

export default function ButtonSecondarySmallDefault({ title, ...props }) {
    return (
        <ButtonSecondarySmallStyle {...props}>
            {/* Touchable highlight can only receive one child (has to do this trick) */}
            <>
                <ButtonText>{title}</ButtonText>
                <ImageWrapper source={LogoutIcon} width={24} height={24} />
            </>
        </ButtonSecondarySmallStyle>
    );
}