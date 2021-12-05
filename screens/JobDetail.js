import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import detail from '../public/assets/css/detail';
import TextTicker from 'react-native-text-ticker';

const jobDetail = () => {
  return(
      <ScrollView style = {detail.boder}>
        <Text style = {detail.title}>Thời gian tập trung còn lại</Text>
        <View style={detail.box}>
          <Image style={detail.image} source={require("./bike.jpg")}></Image>
          <View style={detail.information}>
            <TextTicker style={detail.text}>Thiết kế mạng</TextTicker>
            <TextTicker style={detail.text}>Còn lại 65 phút - 20 promodo</TextTicker>
            <TextTicker style={detail.textbold}>Dự kiến hoàn thành trước deadline!</TextTicker>
          </View>
        </View>
        <View style={{paddingBottom: 90}}></View>
      </ScrollView>
  )
  
}
export default jobDetail;
