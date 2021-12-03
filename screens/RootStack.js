import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';
import Register from './Register';
import Login from './Login';
import WorkingScreen from './WorkingScreen';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import TaskScreen from './TaskScreen';
import Tabs from './TabNavigation';
import AddTask1Screen from './AddTask1Screen';
import AddTask2Screen from './AddTask2Screen';
import AddTask3Screen from './AddTask3Screen';
import SleepCalculator from './SleepCalculator';
const RootStack = createStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootStackScreen = ({navigation}) => {
  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        console.log('no token found');
        return;
      }
    };
    getToken();
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
      })}>
      <RootStack.Screen name="Intro1" component={Intro1} />
      <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="Intro2" component={Intro2} />
      <RootStack.Screen name="Intro3" component={Intro3} />
      <RootStack.Screen name="Tabs" component={Tabs} />
      <RootStack.Screen name="WorkingScreen" component={WorkingScreen} />
      <RootStack.Screen name="SleepCalculator" component={SleepCalculator} />
      <RootStack.Screen name="TaskScreen" component={TaskScreen} />
      <RootStack.Screen name="AddTask1" component={AddTask1Screen} />
      <RootStack.Screen name="AddTask2" component={AddTask2Screen} />
      <RootStack.Screen name="AddTask3" component={AddTask3Screen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
