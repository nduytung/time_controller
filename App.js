import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import RootStackScreen from './screens/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
