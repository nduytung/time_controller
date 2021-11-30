import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';
import PriodScreen from './PriodScreen';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Tabs from './TabsScreen';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={({route, navigation}) => ({
      headerShown: false,
    })}>
    <RootStack.Screen name="Intro1" component={Intro1} />
    <RootStack.Screen name="Intro2" component={Intro2} />
    <RootStack.Screen name="Intro3" component={Intro3} />
    <RootStack.Screen name="Tabs" component={Tabs} />
    <RootStack.Screen name="PriodScreen" component={PriodScreen} />
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
