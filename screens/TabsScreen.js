import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Text, View, Image, StyleSheet, TouchableOpacity
} from 'react-native'

import HomeScreen from './HomeScreen';
import ProgressScreen from './ProgressScreen';
import SettingScreen from './SettingScreen';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';
import todoScreen from './todoSreen';

import { exp } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import { Header } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const CustomTabBarButon = ({children, onPress}) => (
    <TouchableOpacity
        style ={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ... styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width:70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#f1f522'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                position: 'absolute',
                Header: 'false',
                elevation: 0,
                backgroundColor: '#ffffff',
                height: 90,
                ... styles.shadow
            }
        }}>
            <Tab.Screen  name="HomeScreen" component={HomeScreen}  options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                       <Image
                       source={require('../public/assets/image/home.png')}
                       resizeMode="contain"
                       style={{
                           width: 25,
                           height: 25,
                           tintColor: focused ? '#f1f522' : '#748c94',
                       }}
                       />
                       <Text
                       style={{color: focused ? '#f1f522' : '#748c94', fontSize: 12}}>
                           Home
                       </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="ProgressScreen" component={ProgressScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                       <Image
                       source={require('../public/assets/image/progress.png')}
                       resizeMode="contain"
                       style={{
                           width: 25,
                           height: 25,
                           tintColor: focused ? '#f1f522' : '#748c94',
                       }}
                       />
                       <Text
                       style={{color: focused ? '#f1f522' : '#748c94', fontSize: 12}}>
                           Progress
                       </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="PostScreen" component={PostScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../public/assets/image/plus.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: '#fff'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButon{...props}/>
                    )
                }}
            />
            <Tab.Screen name="todoScreen" component={todoScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                       <Image
                       source={require('../public/assets/image/profile.png')}
                       resizeMode="contain"
                       style={{
                           width: 25,
                           height: 25,
                           tintColor: focused ? '#f1f522' : '#748c94',
                       }}
                       />
                       <Text
                       style={{color: focused ? '#f1f522' : '#748c94', fontSize: 12}}>
                           Profile
                       </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="SettingScreen" component={SettingScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                       <Image
                       source={require('../public/assets/image/setting.png')}
                       resizeMode="contain"
                       style={{
                           width: 25,
                           height: 25,
                           tintColor: focused ? '#f1f522' : '#748c94',
                       }}
                       />
                       <Text
                       style={{color: focused ? '#f1f522' : '#748c94', fontSize: 12}}>
                           Setting
                       </Text>
                    </View>
                ),
            }}/>
            
        </Tab.Navigator>
        
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
    },
});

export default Tabs;