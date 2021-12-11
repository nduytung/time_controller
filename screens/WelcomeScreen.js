import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useEffect} from 'react/cjs/react.development';
import splashStyle from '../public/assets/css/splashStyle';
import PushNotification from 'react-native-push-notification';

const SplashScreen = ({navigation}) => {
  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'noti-channel',
      channelName: 'Main Notification Channel',
    });
  };

  const handleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'noti-channel',
      title: 'BOOM!',
      date: new Date(Date.now() + 60 * 100000),
      message: 'THis is just a testing message',
      allowWhileIdle: true,
      repeatTime: 1,
    });
  };

  return (
    <View style={splashStyle.container}>
      <ImageBackground
        source={require('../public/assets/image/main-bg.jpg')}
        resizeMode="cover"
        blurRadius={4}
        style={{flex: 1, justifyContent: 'center'}}>
        <StatusBar barStyle="light-content" />
        <View style={splashStyle.header}>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              letterSpacing: 20,
              marginTop: 40,
            }}>
            TIME SNAP
          </Text>
        </View>
        <Animatable.View style={splashStyle.footer} animation="fadeInUpBig">
          <Text style={splashStyle.title}>
            Time managing don't need to be that hard
          </Text>
          <View style={splashStyle.button}>
            <TouchableOpacity
              onPress={() => {
                handleNotification();
                navigation.navigate('Login');
              }}
              style={[
                splashStyle.SignIn,
                {
                  backgroundColor: '#815fde',
                  borderWidth: 1,
                },
              ]}>
              <Text style={[splashStyle.textSign, {color: 'white'}]}>
                Đăng nhập{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={[
                splashStyle.SignIn,
                {
                  borderColor: '#815fde',
                  borderWidth: 1,
                  marginTop: 20,
                },
              ]}>
              <Text style={[splashStyle.textSign, {color: '#815fde'}]}>
                Đăng ký{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
