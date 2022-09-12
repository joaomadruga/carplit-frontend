import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const RidersContent = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${props => props.justifyContent};
  margin-top: 16px;
  flex: 1;
`;

export default RidersContent;