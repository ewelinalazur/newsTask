import styled from '@emotion/native';
import React from 'react';
import { Provider } from 'react-redux';

import NavContainer from './src/navigations/NavContainer';
import store from './src/state/store';

const StyledMainContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;
export default function Root() {
  return (
    <Provider store={store}>
      <StyledMainContainer>
        <NavContainer />
      </StyledMainContainer>
    </Provider>
  );
}
