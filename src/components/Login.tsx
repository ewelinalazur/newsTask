import styled from '@emotion/native';
import React from 'react';

import Button from './Button';
import Input from '../components/Input';
import { LoginComponentsProps } from './types';

const StyledHeaderWrapper = styled.View`
  display: flex;
  justify-content: flex-start;
  margin: 20px 10px;
`;
const StyledHeader = styled.Text`
  font-size: 32px;
  line-height: 39px;
  color: #232f5f;
  font-weight: 600;
`;
const ContentWrapper = styled.View`
  flex: 1;
  padding: 0 25px;
  background-color: #fff;
`;

const LoginClient = ({ error, form, onChange, onSubmit }: LoginComponentsProps) => {
  return (
    <ContentWrapper>
      <StyledHeaderWrapper>
        <StyledHeader>Witaj!</StyledHeader>
      </StyledHeaderWrapper>

      <Input
        onChangeText={(value: string) => {
          onChange({ name: 'username', value });
        }}
        value={form.username || ''}
        label="Username"
        placeholder="username"
        error={error}
      />
      <Input
        onChangeText={(value: string) => {
          onChange({ name: 'password', value });
        }}
        label="Password"
        secureTextEntry
        placeholder="Hasło"
        error={error}
      />

      <Button title="Kontynuuj" onPress={onSubmit} />
    </ContentWrapper>
  );
};

export default LoginClient;
