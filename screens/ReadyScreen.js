import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ReadyStyle from '../public/assets/css/readyStyle';

const ReadyScreen = () => {
    return(
        <View style={ReadyStyle.container}>
            <View style={ReadyStyle.viewtext}>
                <Text style={ReadyStyle.text}>OK! Bạn đã sẵn sàng</Text>
                <Text style ={{fontSize: 16, marginTop: 10, color: 'black'}}>Giờ thì bắt tay vào việc thôi! </Text>
                <Image source={require('../icon/ready.png')}
                    style={[ReadyStyle.image,{width: '100%'}]}
                />
                <TouchableOpacity 
                    style={ReadyStyle.btnStart}>
                        <LinearGradient
                            colors={['#5db8fe', '#39cff2']}
                            style={ReadyStyle.btnlayout}>
                                <Text style={{color:'white', fontSize: 16}}>BẮT ĐẦU</Text>
                        </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default ReadyScreen;

