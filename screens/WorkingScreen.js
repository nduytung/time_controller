import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import priodStyle from '../public/assets/css/priodStyle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const PriodScreen = ({pomodoro = 25}) => {
  let [minute, setMinute] = useState(pomodoro);
  let [second, setSecond] = useState(59);

  useEffect(() => {
    //gom 2 phan la phut va giay
    setInterval(() => {
      if (minute > 0) {
        setSecond(second--);
      } else return;
    }, 1000);

    setInterval(() => {
      setMinute(minute--);
      if (second <= 0) {
        setSecond(60);
      } else return;
    }, 60000);
  }, []);
  return (
    <View style={priodStyle.body}>
      <View style={priodStyle.progressView}>
        <AnimatedCircularProgress
          size={300}
          width={30}
          fill={minute * 4}
          tintColor="#FECB1C"
          backgroundColor="#FFFFFF"
          rotation={-360}>
          {fill => (
            <Text style={priodStyle.bigText}>
              {minute} : {second}
            </Text>
          )}
        </AnimatedCircularProgress>
      </View>
      <View style={priodStyle.imgView}>
        <Pressable class="press" style={priodStyle.pressable}>
          <Image
            tyle={priodStyle.img}
            source={'../public/assets/image/media5.png'}
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
  );
};

export default PriodScreen;
