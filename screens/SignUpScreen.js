import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Picker from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import signupStyle from '../public/assets/css/signupStyle';
import {registerHandler} from '../asyncFunctions/handleApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const SignUpScreen = ({navigation}) => {
  const [userData, setUserData] = useState({
    fullname: '',
    username: '',
    password: '',
    sex: 'Male',
    email: '',
  });

  const handleRegister = async () => {
    const {fullname, username, password, sex, email} = userData;
    let data = await registerHandler(fullname, username, password, sex, email);
    //neu login thanh cong
    if (data.success == true) {
      console.log('signed up!');
      try {
        await AsyncStorage.setItem('@token', data.accessToken);
        navigation.navigate('Intro1');
      } catch (e) {
        console.log('Logged in err: ' + err);
      }
    } else {
      console.log('cant login');
      ToastAndroid.show(
        'Mật khẩu/Tài khoản không đúng, xin vui lòng thử lại',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <View style={signupStyle.container}>
      <View style={signupStyle.header}>
        <Text style={signupStyle.text_header}>Welcome!!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={signupStyle.footer}>
        <ScrollView>
          <Text style={signupStyle.screename}>Create Account</Text>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>
            Fullname
          </Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="user-o"
              color="#05375a"
              size={13}
              style={signupStyle.usericon}
            />
            <TextInput
              placeholder="Your fullname..."
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.fullname}
              onChangeText={text => setUserData({...userData, fullname: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>
            Username
          </Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="user-o"
              color="#05375a"
              size={13}
              style={signupStyle.usericon}
            />
            <TextInput
              placeholder="Your username..."
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.username}
              onChangeText={text => setUserData({...userData, username: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>Sex</Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="user-o"
              color="#05375a"
              size={13}
              style={signupStyle.usericon}
            />
            <TextInput
              placeholder="Your sex..."
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.sex}
              onChangeText={text => setUserData({...userData, sex: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>Email</Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="user-o"
              color="#05375a"
              size={13}
              style={signupStyle.usericon}
            />
            <TextInput
              placeholder="Your email..."
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.email}
              onChangeText={text => setUserData({...userData, email: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>
            Password
          </Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="lock"
              color="#05375a"
              size={13}
              style={signupStyle.lockicon}
            />
            <TextInput
              placeholder="Your password..."
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.password}
              onChangeText={text => setUserData({...userData, password: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>
            Confirm Password
          </Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="lock"
              color="#05375a"
              size={13}
              style={signupStyle.lockicon}
            />
            <TextInput
              placeholder="Confirm Your password..."
              style={signupStyle.textInput}
              autoCapitalize="none"
            />
          </View>

          <View style={signupStyle.button}>
            <TouchableOpacity
              onPress={() => handleRegister()}
              style={[
                signupStyle.SignIn,
                {
                  borderColor: '#4dc2f8',
                  borderWidth: 1,
                  marginTop: -30,
                },
              ]}>
              <LinearGradient
                colors={['#5db8fe', '#39cff2']}
                style={signupStyle.SignIn}>
                <Text style={[signupStyle.textSign, {color: 'white'}]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={signupStyle.TextSignIn}>
              <Text>I'm already a member, </Text>
              <Text
                onPress={() => navigation.navigate('SignInScreen')}
                style={{color: '#009bd1'}}>
                Sign In
              </Text>
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;
