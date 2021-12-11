import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import personalUI from '../public/assets/css/personalUI';
import TextTicker from 'react-native-text-ticker';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react/cjs/react.development';
import {handleGetUserInfo} from '../asyncFunctions/handleApi';
import ImagePicker from 'react-native-image-picker';

const personalManager = ({navigation}) => {
  const [userData, setUserData] = useState();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      RNRestart.Restart();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const data = await handleGetUserInfo(token);
        await setUserData(data.userInfo);
        console.log(userData);
      } catch (err) {
        console.log('get user info err: ' + err);
      }
    };

    getUserInfo();
  }, []);
  return (
    <View style={personalUI.fullScreen}>
      <View style={personalUI.top}>
        <TouchableOpacity onPress={() => {}}>
          {userData?.avt ? (
            <Image
              style={personalUI.img}
              source={{
                uri: `data:image/png;base64,${userData && userData.avt}`,
              }}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={personalUI.img}
              source={require('../public/assets/image/user-avt.png')}
              resizeMode="center"
            />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={personalUI.bottom}>
        <Text style={personalUI.title2}>Thông tin cá nhân</Text>
        <View style={personalUI.viewBottom}>
          <Text style={personalUI.information}>Họ tên</Text>
          <View style={personalUI.detailInfor}>
            <Text style={personalUI.textDetailInfor}>
              {(userData && userData.fullname) || ''}{' '}
            </Text>
            <Entypo
              name="chevron-thin-right"
              size={16}
              onPress={() => {
                navigation.navigate('EditProfile', {userData});
              }}
            />
          </View>
        </View>
        <View style={personalUI.viewBottom}>
          <Text style={personalUI.information}>Giới tính</Text>
          <View style={personalUI.detailInfor}>
            <Text style={personalUI.textDetailInfor}>
              {(userData && userData.sex) || ''}{' '}
            </Text>
            <Entypo name="chevron-thin-right" size={16} />
          </View>
        </View>
        <View style={personalUI.viewBottom}>
          <Text style={personalUI.information}>Tên người dùng</Text>
          <View style={personalUI.detailInfor}>
            <Text style={personalUI.textDetailInfor}>
              {(userData && userData.username) || ''}{' '}
            </Text>
            <Entypo name="chevron-thin-right" size={16} />
          </View>
        </View>
        <View style={personalUI.viewBottom}>
          <Text style={personalUI.information}>Email</Text>
          <View style={personalUI.detailInfor}>
            <Text style={personalUI.textDetailInfor}>
              {(userData && userData.email) || ''}{' '}
            </Text>
            <Entypo
              name="chevron-thin-right"
              size={16}
              onPress={() => {
                navigation.navigate('EditProfile', {userData});
              }}
            />
          </View>
        </View>
        <View style={personalUI.viewBottom}>
          <Text style={personalUI.information}>Thay đổi mật khẩu</Text>
          <View style={personalUI.detailInfor}>
            <Text style={personalUI.textDetailInfor}></Text>
            <Entypo
              name="chevron-thin-right"
              size={16}
              onPress={() => {
                navigation.navigate('EditProfile', {userData});
              }}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          handleLogout();
        }}
        style={{
          width: '90%',
          backgroundColor: '#eedecf',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 120,
        }}>
        <Text style={{color: 'gray', fontSize: 18, textAlign: 'center'}}>
          Đăng xuất{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default personalManager;
