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
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import signupStyle from '../public/assets/css/signupStyle';
import {registerHandler} from '../asyncFunctions/handleApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    username: '',
    confirm_password: '',
    check_textInputChange: false,
    check_usernameChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInPutChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const usernameChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_usernameChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_usernameChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const handleRegister = async () => {
    const serverResponse = await registerHandler(
      data.username,
      data.email,
      data.password,
    );
    try {
      await AsyncStorage.setItem('token', serverResponse);
    } catch (err) {
      console.log('ERROR WITH STORAGE: ' + err);
    }
  };

  return (
    <View style={signupStyle.container}>
      <View style={signupStyle.header}>
        <Text style={signupStyle.text_header}>Welcome!!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={signupStyle.footer}>
        <Text style={signupStyle.screename}>Create Account</Text>
        <Text style={[signupStyle.text_footer, {marginTop: 10}]}>Fullname</Text>
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
            onChangeText={val => usernameChange(val)}
          />
        </View>
        <Text style={[signupStyle.text_footer, {marginTop: 10}]}>Username</Text>
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
            onChangeText={val => textInPutChange(val)}
          />
          {data.check_textInputChange ? (
            <Feather
              name="check-circle"
              color="green"
              size={13}
              style={signupStyle.usercheckicon}
            />
          ) : null}
        </View>
        <Text style={[signupStyle.text_footer, {marginTop: 10}]}>Password</Text>
        <View style={signupStyle.action}>
          <FontAwesome
            name="lock"
            color="#05375a"
            size={13}
            style={signupStyle.lockicon}
          />
          <TextInput
            placeholder="Your password..."
            secureTextEntry={data.secureTextEntry ? true : false}
            style={signupStyle.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather
                name="eye-off"
                color="gray"
                size={13}
                style={signupStyle.passeyeicon}
              />
            ) : (
              <Feather
                name="eye"
                color="gray"
                size={13}
                style={signupStyle.passeyeicon}
              />
            )}
          </TouchableOpacity>
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
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={signupStyle.textInput}
            autoCapitalize="none"
            onChangeText={val => handleConfirmPasswordChange(val)}
          />

          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Feather
                name="eye-off"
                color="gray"
                size={13}
                style={signupStyle.passeyeicon}
              />
            ) : (
              <Feather
                name="eye"
                color="gray"
                size={13}
                style={signupStyle.passeyeicon}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={signupStyle.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Intro1')}
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
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;
