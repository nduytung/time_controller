import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReadyStyle from '../public/assets/css/readyStyle';
import splashStyle from '../public/assets/css/splashStyle';

const ReadyScreen = ({navigation}) => {
  return (
    <View style={ReadyStyle.container}>
      <View style={ReadyStyle.viewtext}>
        <Text style={ReadyStyle.text}>OK! Bạn đã sẵn sàng</Text>
        <Text style={{fontSize: 16, marginTop: 10, color: 'black'}}>
          Giờ thì bắt tay vào việc thôi!{' '}
        </Text>
        <Image
          source={require('../public/assets/image/ready-screen.png')}
          style={[ReadyStyle.image, {width: '90%', height: '60%'}]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={[
            splashStyle.SignIn,
            {
              backgroundColor: '#815fde',
              borderWidth: 1,
            },
          ]}>
          <Text style={[splashStyle.textSign, {color: 'white'}]}>
            Đi đến trang chủ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReadyScreen;
