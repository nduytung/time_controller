import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import splashStyle from '../public/assets/css/splashStyle';

const SplashScreen = ({navigation}) => {
  return (
    <View style={splashStyle.container}>
      <StatusBar barStyle="light-content" />
      <View style={splashStyle.header}></View>
      <Animatable.View style={splashStyle.footer} animation="fadeInUpBig">
        <Text style={splashStyle.title}>Best way to control your time</Text>
        <View style={splashStyle.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[
              splashStyle.SignIn,
              {
                borderColor: '#4dc2f8',
                borderWidth: 1,
              },
            ]}>
            <LinearGradient
              colors={['#5db8fe', '#39cff2']}
              style={splashStyle.SignIn}>
              <Text style={[splashStyle.textSign, {color: 'white'}]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[
              splashStyle.SignIn,
              {
                borderColor: 'black',
                borderWidth: 1,
                marginTop: 20,
              },
            ]}>
            <Text style={[splashStyle.textSign, {color: 'black'}]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;
