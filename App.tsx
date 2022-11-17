import React from 'react';
import { Provider } from 'react-redux';
import NavContainer from './src/navigations/NavContainer';
import store from './src/state/store';
import { StatusBar, View, SafeAreaView } from 'react-native';

interface StatusBarProps {
  backgroundColor: string;
}
export default function Root() {
  const STATUSBAR_HEIGHT = StatusBar.currentHeight;
  const StatusBarWrapper = ({ backgroundColor }: StatusBarProps) => (
    <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: backgroundColor }}>
      <SafeAreaView>
        <StatusBar backgroundColor={backgroundColor} animated={true} barStyle="dark-content" />
      </SafeAreaView>
    </View>
  );
  return (
    <Provider store={store}>
      <StatusBarWrapper backgroundColor="#fff" />
      <NavContainer />
    </Provider>
  );
}
