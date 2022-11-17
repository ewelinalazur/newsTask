import styled from '@emotion/native';
import React from 'react';

import { InputItems, StyledInputProps, StyledTextInputProps } from './types';

const StyledInputContainer = styled.View<StyledInputProps>`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  margin-top: 17px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  font-size: 14px;
  width: 100%;
  height: 100%;
  padding-left: 27px;
  line-height: 19px;
`;

const StyledErrorText = styled.Text`
  text-align: right;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: -16px;
  font-size: 12px;
  line-height: 17px;
`;

const Input = ({
  onChangeText,
  value,
  error,
  placeholder,
  secureTextEntry,
  ...props
}: InputItems) => {
  return (
    <StyledInputContainer error={error}>
      <StyledTextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        error={error}
        autoCapitalize="none"
        {...props}
      />
      {error && <StyledErrorText>wprowadź poprawne dane</StyledErrorText>}
    </StyledInputContainer>
  );
};

export default Input;
