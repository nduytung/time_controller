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

const Intro2 = ({navigation}) => {
  return (
    <View style={{margin: 10}}>
      <Image
        style={introStyle.imageshow}
        source={require('../public/assets/image/intro2.png')}></Image>
      <Text style={introStyle.textDetail2}>
        Cài đặt thời khóa biểu, thời gian rảnh, cá nhân hóa lịch trình và nhiều
        hơn thế nữa!
      </Text>
      <View style={{marginBottom: 90}}>
        <NextNav
          next={() => {
            navigation.navigate('Intro3');
          }}
          prev={() => {
            navigation.navigate('Intro1');
          }}
        />
      </View>
    </View>
  );
};
export default Intro2;
