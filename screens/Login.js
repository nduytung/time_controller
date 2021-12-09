import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ToastAndroid,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import signinStyle from '../public/assets/css/signinStyle';
import {loginHandler} from '../asyncFunctions/handleApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    let data = await loginHandler(username, password);

    if (data.success === true) {
      await AsyncStorage.setItem('token', JSON.stringify(data?.accessToken));
      await AsyncStorage.removeItem('firstTime');
      navigation.navigate('Tabs');
    }
  };

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
    <View style={signinStyle.container}>
      <View style={signinStyle.header}></View>

      <Animatable.View animation="fadeInUpBig" style={signinStyle.footer}>
        <Text style={signinStyle.screenname}>Đăng nhập</Text>
        <Text style={signinStyle.text_footer}>Tên người dùng</Text>
        <View style={signinStyle.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20}
            style={signinStyle.usericon}
          />
          <TextInput
            placeholder="Tên người dùng"
            style={signinStyle.textInput}
            autoCapitalize="none"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <Text style={[signinStyle.text_footer, {marginTop: 10}]}>Mật khẩu</Text>
        <View style={signinStyle.action}>
          <FontAwesome
            name="lock"
            color="#05375a"
            size={20}
            style={signinStyle.passicon}
          />
          <TextInput
            style={{color: 'white'}}
            placeholder="Mật khẩu"
            style={signinStyle.textInput}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Text style={{color: '#009bd1', textAlign: 'right'}}>
          Quên mật khẩu{' '}
        </Text>
        <View style={signinStyle.button}>
          <TouchableOpacity
            onPress={() => handleLogin()}
            style={[
              signinStyle.SignIn,
              {
                borderColor: '#815fde',
                borderWidth: 1,
                marginTop: -30,
              },
            ]}>
            <Text style={[signinStyle.textSign, {color: 'white'}]}>
              Đăng nhập{' '}
            </Text>
          </TouchableOpacity>
          <View style={signinStyle.TextSignUp}>
            <Text>Chưa có tài khoản? </Text>
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{color: '#009bd1'}}>
              Đăng ký
            </Text>
          </View>
          <View style={{marginTop: 30, fontSize: 18}}>
            <Text>Đăng nhập với</Text>
            <View style={signinStyle.OtherSignIn}>
              <Entypo
                name="facebook-with-circle"
                color="blue"
                size={30}
                style={signinStyle.facebookicon}
              />
              <Entypo
                name="mail-with-circle"
                color="red"
                size={30}
                style={signinStyle.mailicon}
              />
            </View>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
