import styled from '@emotion/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ButtonItems } from './types';

const StyledView = styled.View`
  width: 100%;
  height: 50px;
  background-color: #232f5f;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid transparent;
`;
const StyledText = styled.Text`
  font-size: 16px;
  line-height: 25px;
  color: #fff;
  font-weight: 600;
`;

const Button = ({ title, onPress }: ButtonItems) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledView>{title && <StyledText>{title}</StyledText>}</StyledView>
    </TouchableOpacity>
  );
};

export default Button;
