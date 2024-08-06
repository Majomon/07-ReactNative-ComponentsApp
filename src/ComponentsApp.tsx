import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {Navigator} from './presentation/navigator/Navigator';
import {ThemeProvider} from './presentation/context/ThemeContext';

const AppState = ({children}: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export const ComponentsApp = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};
