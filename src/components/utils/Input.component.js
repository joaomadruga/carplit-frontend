import styled from 'styled-components/native';

const InputStyle = styled.TextInput`
  background-color: #F2F2F3;
  border-radius: 8px;
  width: 80%;
  height: 64px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'RetniSans-Medium';
`;

export default function Input({ placeholder }) {
  return <InputStyle placeholder={placeholder} placeholderTextColor='#686D73'/>;
}