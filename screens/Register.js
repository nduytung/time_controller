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
    sex: 'Nam',
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
        <Text style={signupStyle.text_header}>Chào bạn mới!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={signupStyle.footer}>
        <ScrollView style={signupStyle.scrollview}>
          <Text style={signupStyle.screename}>Đăng ký tài khoản</Text>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>Họ tên</Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="user-o"
              color="#05375a"
              size={13}
              style={signupStyle.usericon}
            />
            <TextInput
              placeholder="Tên đầy đủ của bạn"
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.fullname}
              onChangeText={text => setUserData({...userData, fullname: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>
            Tên người dùng
          </Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="user-o"
              color="#05375a"
              size={13}
              style={signupStyle.usericon}
            />
            <TextInput
              placeholder="Tên người dùng (không dấu, không cách)"
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.username}
              onChangeText={text => setUserData({...userData, username: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>
            Giới tính
          </Text>
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
              placeholder="Email của bạn"
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.email}
              onChangeText={text => setUserData({...userData, email: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>
            Mật khẩu
          </Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="lock"
              color="#05375a"
              size={13}
              style={signupStyle.lockicon}
            />
            <TextInput
              placeholder="Mật khẩu nên có ký tự đặc biệt."
              style={signupStyle.textInput}
              autoCapitalize="none"
              value={userData.password}
              secureTextEntry={true}
              onChangeText={text => setUserData({...userData, password: text})}
            />
          </View>

          <Text style={[signupStyle.text_footer, {marginTop: 10}]}>
            Xác nhận mật khẩu
          </Text>
          <View style={signupStyle.action}>
            <FontAwesome
              name="lock"
              color="#05375a"
              size={13}
              style={signupStyle.lockicon}
            />
            <TextInput
              placeholder="Xác nhận mật khẩu."
              secureTextEntry={true}
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
                  borderColor: '#815fde',
                  borderWidth: 1,
                  marginTop: -30,
                  backgroundColor: '#815fde',
                },
              ]}>
              <Text style={[signupStyle.textSign, {color: 'white'}]}>
                Đăng ký
              </Text>
            </TouchableOpacity>
            <View style={signupStyle.TextSignIn}>
              <Text>Tôi đã có tài khoản </Text>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{color: '#009bd1'}}>
                Đăng nhập{' '}
              </Text>
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;
