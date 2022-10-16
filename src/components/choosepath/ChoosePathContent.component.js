import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const ChoosePathContent = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${props => props.justifyContent};
  margin-top: 16px;
`;

export default ChoosePathContent;