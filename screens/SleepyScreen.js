import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import TextTicker from 'react-native-text-ticker';
import sleepyStyle from '../public/assets/css/sleepyStyle'



const SleepyScreen = () => {
    return(
        <ScrollView style={sleepyStyle.backgroundFont}>
            <TextTicker style={sleepyStyle.helloText}>Chào buổi tối, DUY TÙNG!</TextTicker>
            <Image style={sleepyStyle.imageF} source={require('../public/assets/image/sleepy.png')}></Image>
            <Text style={sleepyStyle.text}>Bạn muốn thức dậy vào lúc: </Text>
            <TextInput style={sleepyStyle.textInput}></TextInput>
            <View style={sleepyStyle.time}>
                <View style={sleepyStyle.timeLeft}>
                    <Text style={sleepyStyle.text1}>Hãy</Text>
                    <Text style={sleepyStyle.text2}>Đi Ngủ</Text>
                    <Text style={sleepyStyle.text1}>Vào</Text>
                </View>

                <ScrollView style={sleepyStyle.timeRight}>
                    <Text style={sleepyStyle.textTime}>10 PM</Text>
                    <Text style={sleepyStyle.textTime}>11 PM</Text> 
                    <Text style={sleepyStyle.textTime}>12 PM</Text>
                    <Text style={sleepyStyle.textTime}>10 PM</Text>
                    <Text style={sleepyStyle.textTime}>11 PM</Text> 
                    <Text style={sleepyStyle.textTime}>12 PM</Text>
                    <Text style={sleepyStyle.textTime}>10 PM</Text>
                    <Text style={sleepyStyle.textTime}>11 PM</Text> 
                    <Text style={sleepyStyle.textTime}>12 PM</Text>
                    <Text style={sleepyStyle.textTime}>10 PM</Text>
                    <Text style={sleepyStyle.textTime}>11 PM</Text> 
                    <Text style={sleepyStyle.textTime}>12 PM</Text>
                </ScrollView>
            </View>
            <TouchableOpacity onPress={() => {}} style={sleepyStyle.touch}>
                <Text style={sleepyStyle.textBaothuc}>Đặt Báo Thức</Text>
            </TouchableOpacity>


            <View style={{marginBottom: 90}}></View>
            
        </ScrollView>
    )
}
export default SleepyScreen;
