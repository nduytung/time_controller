import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import profileStyle from '../public/assets/css/profileStyle';
import IconFontAS from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Thanh Hau',
    gender: 'Male',
    friends: 20,
    ranking: 1,
    streak: 40,
    email: 'haudang2107@gmail.com',
    home: 'Vinh Long',
    phone: '09xxxxxxx',
  });

  return (
    <View style={profileStyle.screen}>
      <ScrollView>
        <View style={profileStyle.headpage}></View>

        <View style={profileStyle.tailpage}>
          <Image
            source={require('../public/assets/image/duck.gif')}
            style={profileStyle.avatar}></Image>
        </View>
        <View style={profileStyle.inforContainer}>
          <Text style={profileStyle.name}>{userInfo.name}</Text>
          <Text>Male</Text>
        </View>

        <View style={profileStyle.statusContainer}>
          <View style={profileStyle.statusBox}>
            <Text style={profileStyle.text}>{userInfo.friends} </Text>
            <Text>Bạn bè</Text>
          </View>
          <View style={profileStyle.statusBox}>
            <Text style={profileStyle.text}>TOP {userInfo.ranking} </Text>
            <Text>Thành tích tháng</Text>
          </View>
          <View style={profileStyle.statusBox}>
            <Text style={profileStyle.text}>{userInfo.streak} </Text>
            <Text>Promodo</Text>
          </View>
        </View>

        {/* chua biet lam gi voi cai nay, cu tam thoi bo ra da */}
        {/* <View style={profileStyle.imageShow}>
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            <View style={profileStyle.imageView}>
              <Image
                source={require('../public/assets/image/media1.jpg')}
                resizeMode="cover"
                style={profileStyle.image}></Image>
            </View>
            <View style={profileStyle.imageView}>
              <Image
                source={require('../public/assets/image/media2.jpg')}
                resizeMode="cover"
                style={profileStyle.image}></Image>
            </View>
            <View style={profileStyle.imageView}>
              <Image
                source={require('../public/assets/image/media3.jpg')}
                resizeMode="cover"
                style={profileStyle.image}></Image>
            </View>
            <View style={profileStyle.imageView}>
              <Image
                source={require('../public/assets/image/media5.jpg')}
                resizeMode="cover"
                style={profileStyle.image}></Image>
            </View>
            <View style={profileStyle.imageView}>
              <Image
                source={require('../public/assets/image/media6.jpg')}
                resizeMode="cover"
                style={profileStyle.image}></Image>
            </View>
          </ScrollView>
        </View> */}
        <View style={{marginTop: 15}}>
          <View style={profileStyle.information}>
            <IconFontAS name="envelope-open" size={20}></IconFontAS>
            <Text style={profileStyle.subtext}> Haudang2107@gmail.com</Text>
          </View>
          <View style={profileStyle.information}>
            <IconFontAS name="home" size={23}></IconFontAS>
            <Text style={profileStyle.subtext}> Vinh Long</Text>
          </View>
          <View style={profileStyle.information}>
            <IconFontAS name="phone" size={23}></IconFontAS>
            <Text style={profileStyle.subtext}> +84xxxxx</Text>
          </View>
        </View>
        <View style={{marginTop: 100}}></View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
