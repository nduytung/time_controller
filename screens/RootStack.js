import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from "./SplashScreen";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
import TabsScreen from "./TabsScreen";
import HomeScreen from "./HomeScreen";



const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode = 'none'>
        <RootStack.Screen name = "SplashScreen" component={SplashScreen} />
        <RootStack.Screen name = "SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name = "SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name = "TabsScreen" component={TabsScreen}/>
    </RootStack.Navigator>
)

export default RootStackScreen;
