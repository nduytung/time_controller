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
import introStyle from '../public/assets/css/introStyle';

const intro2 = () => {
    return(
        <View style={{margin: 10}}>
            <Image style={introStyle.imageshow} source={require('../public/assets/image/intro2.png')}></Image>
            <Text style={introStyle.textDetail2}>Cài đặt thời khóa biểu, thời gian rảnh, cá nhân hóa lịch trình và nhiều hơn thế nữa!</Text>
            <View style={{marginBottom: 90}}></View>
        </View>
    )
}
export default intro2;