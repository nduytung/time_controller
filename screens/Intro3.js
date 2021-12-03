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

const Intro3 = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
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
        Quản lý thời gian bằng cơ sở chứng minh khoa học và thực tế
      </Text>
      <TouchableOpacity
        style={introStyle.btnStart}
        onPress={() => {
          navigation.navigate('Tabs');
        }}>
        <Text style={introStyle.textStart}>BẮT ĐẦU</Text>
      </TouchableOpacity>
      <View style={{marginBottom: 90}}></View>
    </View>
  );
};
export default Intro3;
