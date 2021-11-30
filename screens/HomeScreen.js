import React from 'react';
import {
  ScrollView,
  progressStyleheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import progressStyle from '../public/assets/css/progressStyle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Duck from '../public/assets/image/duck.gif';
import Tabs from './TabsScreen';
import global from '../public/assets/css/global';
import TextTicker from 'react-native-text-ticker';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={progressStyle.body}>
      <View class="Sec1" style={progressStyle.sec1}>
        <View class="Text" style={progressStyle.sec1text}>
          <Text style={progressStyle.bigText}>Xin chao!</Text>
          <Text style={progressStyle.text}>Duy Tung</Text>
        </View>
        <View style={progressStyle.sec1img}>
          <Image style={progressStyle.img} source={Duck} resizeMode="center" />
        </View>
      </View>

      <View class="sec2" style={progressStyle.sec2}>
        <View style={progressStyle.progress}>
          <AnimatedCircularProgress
            size={120}
            width={15}
            fill={95}
            tintColor="#FFFFFF"
            backgroundColor="#FFDC65"
            rotation={-360}>
            {fill => <Text style={progressStyle.text}>90%</Text>}
          </AnimatedCircularProgress>
        </View>
        <View style={progressStyle.sec2text}>
          <Text style={(progressStyle.text, {textAlign: 'left'})}>
            Bạn đã hoàn thành
          </Text>
          <Text style={progressStyle.bigText}>
            <Text style={progressStyle.textImpress}>17</Text> Streaks!
          </Text>
        </View>
      </View>
      <Pressable class="press" style={progressStyle.pressable}>
        <Text
          onPress={() => navigation.navigate('PriodScreen')}
          style={progressStyle.textInButton}>
          Làm việc!
        </Text>
      </Pressable>

      <Text style={progressStyle.extentText}>Task tuần này</Text>
      <View style={{flex: 0.6}}>
        <ScrollView style={progressStyle.scroll} horizontal={true}>
          <View style={progressStyle.scrollview}>
            <Text style={(progressStyle.text, {color: '#FFFFFF'})}>
              Bạn đã làm xong
            </Text>
            <Text style={progressStyle.bigText}>100 việc</Text>
            <Text style={progressStyle.text}>
              <Text style={{color: '#FFFFFF'}}>tuần này</Text>
            </Text>
            <Pressable
              style={progressStyle.pressable}
              onPress={() => {
                navigation.navigate('TaskScreen');
              }}>
              <Text style={progressStyle.textInButton}>Xem</Text>
            </Pressable>
          </View>

          <View style={progressStyle.scrollview}>
            <Text style={progressStyle.text}>Số phút tập trung còn lại</Text>
            <Text style={progressStyle.bigText}>200</Text>
            <Pressable style={progressStyle.pressable}>
              <Text style={progressStyle.textInButton}>Xem</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      <View>
        <Text style={progressStyle.extentText}>Làm gì hôm nay?</Text>
        <View style={global.box}>
          <Image
            style={global.imageJob}
            source={require('../public/assets/image/bike.jpg')}></Image>
          <View style={global.infor}>
            <Text style={global.textTime}>20min - 4/5</Text>
            <Text style={global.textWork}>Đạp xe gần nhà 2km</Text>
          </View>
        </View>

        <View style={global.box}>
          <Image
            style={global.imageJob}
            source={require('../public/assets/image/bike.jpg')}></Image>
          <View style={global.infor}>
            <Text style={global.textTime}>20min - 4/5</Text>
            <Text style={global.textWork}>Đạp bộ quanh nhà 1km</Text>
          </View>
        </View>

        <View style={global.box}>
          <Image
            style={global.imageJob}
            source={require('../public/assets/image/book.jpg')}></Image>
          <View style={global.infor}>
            <Text style={global.textTime}>20min - 4/5</Text>
            <Text style={global.textWork}>Báo cáo CK thiết kế mạng</Text>
          </View>
        </View>

        <View style={global.box}>
          <Image
            style={global.imageJob}
            source={require('../public/assets/image/book.jpg')}></Image>
          <View style={global.infor}>
            <Text style={global.textTime}>20min - 4/5</Text>
            <Text style={global.textWork}>
              Làm deadline di động Lab3 SQL Lite, Làm 3 bai
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
