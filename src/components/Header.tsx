import React from 'react';
import styled from '@emotion/native';
import { Icon } from '@rneui/themed';
import { useAppDispatch } from '../state/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setSignedOutStatus } from '../state/user/UserSlice';

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 44px;
`;

const StyledTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  align-self: center;
  line-height: 18px;
`;

const StyledArrow = styled.TouchableOpacity`
  position: absolute;
  right: 14px;
  padding: 20px;
  align-self: center;
`;
interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    await AsyncStorage.clear().then(() => {
      dispatch(setSignedOutStatus(false));
    });
  };
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledArrow onPress={handleLogout}>
        <Icon name="log-out" type="ionicon" color="#232f5f" />
      </StyledArrow>
    </StyledContainer>
  );
};

export default Header;
