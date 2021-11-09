import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import global from '../public/assets/css/global'
import TextTicker from 'react-native-text-ticker'

const todoScreen = () => {
    return(
        <ScrollView style={{margin: 20}}>
            <View>
                <Text style={global.text}>Làm gì hôm nay?</Text>
            </View>
            
            <Animatable.View animation="bounceInDown" style={global.box}>
                <Image style={global.imageJob} source={require('../public/assets/image/bike.jpg')}></Image>
                <View style={global.infor}>
                    <TextTicker style={global.textTime}>20min - 4/5</TextTicker>
                    <TextTicker style={global.textWork}
                            bounce
                            bounceSpeed={60}
                            repeatSpacer={100}
                            marqueeDelay={100}>Đạp xe gần nhà 2km</TextTicker>
                </View>
            </Animatable.View>

            <Animatable.View animation="bounceInDown" style={global.box}>
                <Image style={global.imageJob} source={require('../public/assets/image/bike.jpg')}></Image>
                <View style={global.infor}>
                    <TextTicker style={global.textTime}>20min - 4/5</TextTicker>
                    <TextTicker style={global.textWork}
                            bounce
                            bounceSpeed={60}
                            repeatSpacer={100}
                            marqueeDelay={100}>Đạp bộ quanh nhà 1km</TextTicker>
                </View>
            </Animatable.View>

            <Animatable.View animation="bounceInDown" style={global.box}>
                <Image style={global.imageJob} source={require('../public/assets/image/book.jpg')}></Image>
                <View style={global.infor}>
                    <TextTicker style={global.textTime}>20min - 4/5</TextTicker>
                    <TextTicker style={global.textWork} 
                            bounce
                            bounceSpeed={60}
                            repeatSpacer={100}
                            marqueeDelay={100}>
                            Báo cáo CK thiết kế mạng</TextTicker>
                </View>
            </Animatable.View>

            <Animatable.View animation="bounceInDown" style={global.box}>
                <Image style={global.imageJob} source={require('../public/assets/image/book.jpg')}></Image>
                <View style={global.infor}>
                    <TextTicker style={global.textTime}>20min - 4/5</TextTicker>
                    <TextTicker style={global.textWork} 
                            bounce
                            bounceSpeed={60}
                            repeatSpacer={100}
                            marqueeDelay={100}>
                            Làm deadline di động Lab3 SQL Lite, Làm 3 bai</TextTicker>
                </View>
            </Animatable.View>

            
            <View style={{marginBottom: 90}}></View>

        </ScrollView>
    )
}
export default todoScreen;