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
    <View>
      <Image
        style={introStyle.imageshow}
        source={require('../public/assets/image/duck.gif')}></Image>
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
