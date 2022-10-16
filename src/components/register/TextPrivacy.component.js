import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const TextPrivacyStyle = styled.Text`
  font-family: ${Constants.fontConfig.Sm.Regular.FontFamily};
  font-size: ${Constants.fontConfig.Sm.Regular.FontSize};
  color: ${Constants.colors.gray[600]};
  width: 100%;
  margin-bottom: 16px;
  text-align: center;
`;

const BoldTextPrivacyStyle = styled.Text`
  font-family: ${Constants.fontConfig.Sm.Bold.FontFamily};
  font-size: ${Constants.fontConfig.Sm.Bold.FontSize};
  color: ${Constants.colors.gray[700]};
  width: 100%;
  margin-bottom: 16px;
  text-align: center;
`;

export default function TextPrivacy(){
  return (
    <TextPrivacyStyle>
      Ao tocar em Finalizar cadastro você concorda com nossos <BoldTextPrivacyStyle>Termos de Uso </BoldTextPrivacyStyle>e <BoldTextPrivacyStyle>Política de Privacidade</BoldTextPrivacyStyle>.
    </TextPrivacyStyle>
  )
};
