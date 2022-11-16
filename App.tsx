import React from "react";
import {Provider} from 'react-redux';
import store from './src/state/store';
import NavContainer from "./src/navigations/NavContainer";
import styled from "@emotion/native";

const StyledMainContainer = styled.SafeAreaView`
	flex: 1;
  width: 100%;
`;
export default function Root() {
  return (
    <Provider store={store}>
      <StyledMainContainer>
        <NavContainer/>
      </StyledMainContainer>
    </Provider>
  );
}
