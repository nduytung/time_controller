import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';
import TextTicker from 'react-native-text-ticker';
import introStyle from '../public/assets/css/introStyle';
import NextNav from '../components/NextNav';
import Button from '../components/CustomButton';

const Intro3 = ({navigation}) => {
  const callback = () => {
    navigation.navigate('Tabs');
  };
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <Image
        style={
          (introStyle.imageshow,
          {
            width: 350,
            marginTop: 150,
            height: 350,
          })
        }
        source={require('../public/assets/image/intro3.png')}></Image>
      <Text style={introStyle.textDetail3}>
        Quản lý dự án & dự định cá nhân của bản thân trong chớp mắt!{' '}
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 50,
          paddingVertical: 15,
          width: '90%',
          justifyContent: 'center',
          backgroundColor: '#815fde',
          marginLeft: 'auto',
          marginBottom: 50,
          marginRight: 'auto',
        }}
        onPress={() => callback()}>
        <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
          {' '}
          Bắt đầu{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Intro3;
