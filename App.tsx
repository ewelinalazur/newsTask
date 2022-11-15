import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import News from "./src/screens/News";
import Login from "./src/screens/Login";
import {LOGIN, NEWS} from './src/constants/routeName'
import {Provider} from 'react-redux';
import store from './src/state/store';

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={NEWS} component={News} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
