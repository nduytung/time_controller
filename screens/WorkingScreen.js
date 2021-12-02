import React, {useRef, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import priodStyle from '../public/assets/css/priodStyle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const PriodScreen = ({pomodoro}) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  return (
    <View style={priodStyle.body}>
      {() => startTimer()}
      <View style={priodStyle.progressView}>
        <AnimatedCircularProgress
          size={300}
          width={30}
          fill={90}
          tintColor="#FECB1C"
          backgroundColor="#FFFFFF"
          rotation={-360}>
          {fill => <Text style={priodStyle.bigText}>{formatTime()}</Text>}
        </AnimatedCircularProgress>
      </View>

      <View style={priodStyle.imgView}>
        <Pressable
          class="press"
          onPress={() => handleStart()}
          style={priodStyle.pressable}>
          <Text>click me</Text>
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
