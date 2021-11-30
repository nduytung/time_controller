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
    <View style={{margin: 10}}>
      <Image
        style={introStyle.imageshow}
        source={require('../public/assets/image/intro1.png')}></Image>
      <Text style={introStyle.textTopic}>Xin chào, Duy Tùng!</Text>
      <Text style={introStyle.textDetail}>
        Quản lý tất cả công việc của bạn chỉ bằng một ứng dụng
      </Text>
      <View style={{marginBottom: 90}}>
        <NextNav
          next={() => {
            navigation.navigate('Intro2');
          }}
          prev={() => {}}
        />
      </View>
    </View>
  );
};
export default Intro1;
