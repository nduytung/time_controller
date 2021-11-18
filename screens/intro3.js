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

const intro3 = () => {
    return(
        <View>
            <Image style={introStyle.imageshow} source={require('../public/assets/image/duck.gif')}></Image>
            <Text style={introStyle.textDetail3}>
                Quản lý thời gian bằng cơ sở chứng minh khoa học và thực tế
            </Text>
            <TouchableOpacity style={introStyle.btnStart} onPress={() => {}}>
                <Text style={introStyle.textStart}>BẮT ĐẦU</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 90}}></View>
        </View>
    )
}
export default intro3;