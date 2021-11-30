import React, {useState} from 'react';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import signinStyle from '../public/assets/css/signinStyle';
import {loginHandler} from '../asyncFunctions/handleApi';
const SignInScreen = ({navigation}) => {
  const [data, setData] = useState({
    email: 'haha',
    password: 'hehe',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInPutChange = val => {
    setData({
      ...data,
      email: val,
      check_textInputChange: true,
    });
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = async () => {
    console.log({'email: ': data.email, 'pass: ': data.password});
    try {
      const data = await loginHandler(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

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
            placeholder="Your username..."
            style={signinStyle.textInput}
            autoCapitalize="none"
            value={data.email}
            onChange={e => setData({email: e.target.value, ...data})}
          />
          {data.check_textInputChange ? (
            <Feather
              name="check-circle"
              color="green"
              size={20}
              style={signinStyle.usercheckicon}
            />
          ) : null}
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
            secureTextEntry={data.secureTextEntry ? true : false}
            style={signinStyle.textInput}
            autoCapitalize="none"
            value={data.password}
            onChange={e => setData({password: e.target.value, ...data})}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather
                name="eye-off"
                color="gray"
                size={20}
                style={signinStyle.passeyeicon}
              />
            ) : (
              <Feather
                name="eye"
                color="gray"
                size={20}
                style={signinStyle.passeyeicon}
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{color: '#009bd1', textAlign: 'right'}}>
          Forgot Password
        </Text>
        <View style={signinStyle.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TabsScreen')}
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
