import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import HomeScreen from './HomeScreen';
import ProgressScreen from './HomeScreen';
import NewSettingScreen from './NewSettingScreen';
import ProfileScreen from './PersonalWall';
import Intro3 from './Intro3';

import {exp} from 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Header} from '@react-navigation/stack';
import RankScreen from './RankScreen';
import AddTask1Screen from './AddTask1Screen';
import AddTask2Screen from './AddTask2Screen';
import BufferScreen from './BufferScreen';
import SleepyScreen from './SleepCalculator';
import TaskScreen from './TaskScreen';

const Tab = createBottomTabNavigator();

const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#f8f9fa',
          height: 70,
          shadowOffset: {
            width: -10,
            height: -5,
          },
          shadowOpacity: 1,
          shadowRadius: 0,
          margin: 10,
          borderRadius: 20,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Entypo name="home" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="RankingScreen"
        component={RankScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Entypo name="bar-graph" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SleepCalculator"
        component={SleepyScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Entypo name="moon" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BufferScreen"
        component={BufferScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: '#9ec5fd',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../public/assets/image/plus.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: '#fff',
                  }}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TaskScreen"
        component={TaskScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Entypo name="browser" size={25} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Entypo name="add-user" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={NewSettingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Entypo name="cog" size={25} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
