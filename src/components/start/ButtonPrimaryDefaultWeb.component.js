import { useEffect } from 'react';
import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";
import ArrowRightWhite from "../../../assets/Button/arrow-right-white.png";
import ImageWrapper from '../utils/ImageWrapper.component';
import { View } from 'react-native';


const ButtonPrimaryDefaultStyle = styled.TouchableHighlight`
  background-color: ${Constants.buttonConfig.Default.Primary.Default.BackgroundColor};
  border-radius: ${Constants.buttonConfig.Default.Primary.Default.Radius};
  border-color: ${Constants.buttonConfig.Default.Primary.Default.BorderColor};
  border-width: ${Constants.buttonConfig.Default.Primary.Default.BorderWidth};
  padding: 11px 28.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin-top: 24px;
`;

const ButtonText = styled.Text`
  font-size: ${Constants.fontConfig.Body.Bold.FontSize};
  font-family: ${Constants.fontConfig.Body.Bold.FontFamily};
  color: ${Constants.buttonConfig.Default.Primary.Default.Color};
  margin-right: 8px;
  align-self: center;
`;

export default function ButtonPrimaryDefaultWeb({ title, ...props }) {
    return (
        <ButtonPrimaryDefaultStyle {...props} underlayColor={Constants.buttonConfig.Ontouch.Primary.Default.BackgroundColor}>
            {/* Touchable highlight can only receive one child (has to do this trick) */}
            <>
                <ButtonText>{title}</ButtonText>
                <ImageWrapper source={ArrowRightWhite} width={'20px'} height={'20px'} style={{alignSelf: 'center'}} />
            </>
        </ButtonPrimaryDefaultStyle>
    );
}