import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../state/hooks';
import {LOGIN, NEWS} from "../constants/routeName";
import Login from "../screens/Login";
import News from "../screens/News";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {getData} from "../state/data/DataSlice";

const Stack = createNativeStackNavigator();
const NavContainer = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userLogin.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
            <Stack.Screen name={NEWS} component={News} />
        ) : (
          <Stack.Screen name={LOGIN} component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default NavContainer;
