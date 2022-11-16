import React from "react";
import {Provider} from 'react-redux';
import store from './src/state/store';
import NavContainer from "./src/navigations/NavContainer";


export default function Root() {
  return (
    <Provider store={store}>
      <NavContainer/>
    </Provider>
  );
}
