import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Button from '../components/Buttom';
import Input from '../components/Input';
import styled from '@emotion/native';
import {NavigationInterface, LoginComponentsProps} from './types';


const StyledHeaderWrapper = styled.View`
	display: flex;
	justify-content: flex-start;
	margin-bottom: 10px;
`;
const StyledHeader = styled.Text`
	font-size: 26px;
	line-height: 39px;
	color: #fff;
`;
const StyledDesc = styled.Text`
	color: #fff;
	font-size: 12px;
	line-height: 17px;
	max-width: 70%;
	text-align: left;
`;

const ContentWrapper = styled.View`
	flex: 1;
	padding: 0 25px;
`;

const LoginClient = ({error, form, onChange, loading, onSubmit}: LoginComponentsProps) => {
  const {navigate} = useNavigation<NavigationInterface>();

  return (
    <>
{/*
     // <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={60} keyboardOpeningTime={100}>
*/}
        <ContentWrapper>

          <StyledHeaderWrapper>
            <StyledHeader>Zaloguj się</StyledHeader>
            <StyledDesc>Po pierwszym zalogowaniu ...</StyledDesc>
          </StyledHeaderWrapper>

          <Input
            onChangeText={(value: string) => {
              onChange({name: 'username', value});
            }}
            value={form.username || ''}
            label="Username"
            placeholder="username"
            error={error}
          />
          <Input
            onChangeText={(value: string) => {
              onChange({name: 'password', value});
            }}
            label="Password"
            placeholder="Hasło"
            error={error}
          />

          <Button title="Kontynuuj" onPress={onSubmit} loading={loading} />
        </ContentWrapper>

    </>
  );
};

export default LoginClient;
