import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground
} from "react-native";
import priodStyle from "../public/assets/css/priodStyle";
import IconFontAS from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const ProfileScreen = () => {
    return(
        <View style={priodStyle.body}>
        <View style={priodStyle.progressView}>
          <AnimatedCircularProgress
            size={300}
            width={20}
            fill={90}
            tintColor="#FECB1C"
            backgroundColor="#FFFFFF"
            rotation={-360}>
            {fill => <Text style={priodStyle.bigText}>45 Phút</Text>}
          </AnimatedCircularProgress>
        </View>
        <View style={priodStyle.imgView}>
          <Pressable class="press" style={priodStyle.pressable}>
            <Image
              tyle={priodStyle.img}
              source={require('./image9.png')}
              resizeMode="center"
            />
          </Pressable>
        </View>
  
        <View style={priodStyle.textView}>
          <View style={priodStyle.textViewText}>
            <Text style={priodStyle.text}>Bạn đã hoàn thành</Text>
            <Text style={priodStyle.text}>
              <Text style={priodStyle.bigText}>2 </Text>
              chu kỳ
            </Text>
          </View>
          <View style={priodStyle.verticleLine} />
          <View style={priodStyle.textViewText}>
            <Text style={priodStyle.text}>Còn 2 chu kỳ</Text>
            <Text style={priodStyle.bigText}>để nghỉ dài</Text>
          </View>
        </View>
      </View>
    )
};

export default PriodScreen;