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
      <View style={splashStyle.header}>
        <Image
          source={require('../public/assets/image/welcome.jpg')}
          style={{
            width: '100%',
            height: 420,
          }}
        />
      </View>
      <Animatable.View style={splashStyle.footer} animation="fadeInUpBig">
        <Text style={splashStyle.title}>Quản lý thời gian liệu có khó?</Text>
        <View style={splashStyle.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
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
    </View>
  );
};

export default SplashScreen;
