import React from 'react';
import {ActivityIndicator, Modal, useWindowDimensions} from 'react-native';
import styled from '@emotion/native';
import {SpinnerProps} from './types';

const ModalSpinnerWrapper = styled.View<SpinnerProps>`
	justify-content: center;
	height: ${(p) => p.screenHeight.toString()}px;
	width: ${(p) => p.screenWidth.toString()}px;
	background-color: #fff;
	opacity: 0.8;
`;

const CustomSpinner = () => {
  const screenHeight = useWindowDimensions().height;
  const screenWidth = useWindowDimensions().width;

  return (
    <Modal visible animationType="fade" transparent>
      <ModalSpinnerWrapper screenWidth={screenWidth} screenHeight={screenHeight}>
        <ActivityIndicator size="large"  />
      </ModalSpinnerWrapper>
    </Modal>
  );
};

export default CustomSpinner;
