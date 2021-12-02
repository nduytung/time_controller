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
    //neu login thanh cong
    if (data?.success == true) {
      console.log('logged in!');
      try {
        await AsyncStorage.setItem('token', JSON.stringify(data?.accessToken));
        navigation.navigate('Tabs');
      } catch (e) {
        console.log('Logged in err: ' + err);
      }
    } else {
      console.log('cant login');
      console.log(data?.message);
      ToastAndroid.show(
        'Mật khẩu/Tài khoản không đúng, xin vui lòng thử lại',
        ToastAndroid.SHORT,
      );
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
        <Text style={signinStyle.screenname}>Sign In</Text>
        <Text style={signinStyle.text_footer}>Email Address</Text>
        <View style={signinStyle.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20}
            style={signinStyle.usericon}
          />
          <TextInput
            placeholder="Your username"
            style={signinStyle.textInput}
            autoCapitalize="none"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <Text style={[signinStyle.text_footer, {marginTop: 10}]}>Password</Text>
        <View style={signinStyle.action}>
          <FontAwesome
            name="lock"
            color="#05375a"
            size={20}
            style={signinStyle.passicon}
          />
          <TextInput
            style={{color: 'white'}}
            placeholder="Your password..."
            style={signinStyle.textInput}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity></TouchableOpacity>
        </View>
        <Text style={{color: '#009bd1', textAlign: 'right'}}>
          Forgot Password
        </Text>
        <View style={signinStyle.button}>
          <TouchableOpacity
            onPress={() => handleLogin()}
            style={[
              signinStyle.SignIn,
              {
                borderColor: '#4dc2f8',
                borderWidth: 1,
                marginTop: -30,
              },
            ]}>
            <LinearGradient
              colors={['#5db8fe', '#39cff2']}
              style={signinStyle.SignIn}>
              <Text style={[signinStyle.textSign, {color: 'white'}]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={signinStyle.TextSignUp}>
            <Text>I'm a new user, </Text>
            <Text
              onPress={() => navigation.navigate('SignUpScreen')}
              style={{color: '#009bd1'}}>
              Sign Up
            </Text>
          </View>
          <View style={{marginTop: 30, fontSize: 18}}>
            <Text>Sign In With</Text>
            <View style={signinStyle.OtherSignIn}>
              <Entypo
                onPress={() => navigation.navigate('SignUpScreen')}
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
