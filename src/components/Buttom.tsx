import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {ButtonItems, StyledButtonProps} from './types';
import styled from '@emotion/native';


const StyledView = styled.View<StyledButtonProps>`
	width: ${({small}) => (small ? 'auto' : '100%')};
	height: ${({small}) => (small ? 'auto' : '50px')};
	padding: ${({small}) => (small ? '6px 9px 6px 12px' : '0px')};
	align-self: ${({small}) => (small ? 'flex-start' : '')};
	border-radius: 10px;
	display: flex;
	margin-top: 17px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	border: 2px solid transparent;
`;
const StyledText = styled.Text<StyledButtonProps>`
	font-size: 16px;
	line-height: 25px;
`;

const Button = ({title, disabled, loading, onPress}: ButtonItems) => {

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <StyledView disabled={disabled}>
        {loading && <ActivityIndicator />}
        {title && (
          <StyledText disabled={disabled}>
            {title}
          </StyledText>
        )}
      </StyledView>
    </TouchableOpacity>
  );
};

export default Button;
