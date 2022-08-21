import styled from 'styled-components/native';
import * as Constants from "../../constants/utils/Constants";

const StartComponent = styled.View`
  background-color: ${Constants.colors.gray[0]};
  height: 100%;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default StartComponent;