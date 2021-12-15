import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, LogBox} from 'react-native';
import RootStackScreen from './screens/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      {LogBox.ignoreLogs([])}
      <StatusBar translucent backgroundColor="transparent" />
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
