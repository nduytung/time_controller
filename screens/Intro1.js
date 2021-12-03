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
import NextNav from '../components/NextNav';
import introStyle from '../public/assets/css/introStyle';

const Intro1 = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 200,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
      }}>
      <Image
        style={
          (introStyle.imageshow,
          {
            height: 250,
            width: 350,
            marginBottom: 100,
          })
        }
        source={require('../public/assets/image/intro1.png')}></Image>
      <View>
        <Text style={introStyle.textTopic}>Xin chào, Duy Tùng!</Text>
        <Text style={introStyle.textDetail}>
          Quản lý tất cả công việc của bạn chỉ bằng một ứng dụng
        </Text>
      </View>
      <NextNav
        next={() => {
          navigation.navigate('Intro2');
        }}
        cur={1}
        prev={() => {}}
      />
    </View>
  );
};
export default Intro1;
