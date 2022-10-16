import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import LogoutIcon from "../../../assets/Settings/logout-box-r-icon.png";
import ImageWrapper from '../utils/ImageWrapper.component';


const ButtonPrimarySmallStyle = styled.TouchableHighlight`
  background-color: ${Constants.buttonConfig.Default.Primary.Small.BackgroundColor};
  border-radius: ${Constants.buttonConfig.Default.Primary.Small.Radius};
  padding: 14px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${Constants.buttonConfig.Default.Primary.Default.Color};
`;

export default function ButtonPrimarySmall({ title, ...props }) {
    return (
        <ButtonPrimarySmallStyle {...props}>
            {/* Touchable highlight can only receive one child (has to do this trick) */}
            <>
                <ButtonText>{title}</ButtonText>
            </>
        </ButtonPrimarySmallStyle>
    );
}