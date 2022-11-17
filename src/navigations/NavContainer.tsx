import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { LOGIN, NEWS } from '../constants/routeName';
import Login from '../screens/Login';
import News from '../screens/News';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getData } from '../state/data/DataSlice';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();
const NavContainer = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userLogin.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getData());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => {
            let title = props?.route?.name;
            if (title === NEWS) {
              return <Header title={title} />;
            }
          },
        }}>
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
