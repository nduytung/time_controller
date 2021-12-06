import React, {useRef, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import priodStyle from '../public/assets/css/priodStyle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import challengeStyle from '../public/assets/css/challenge';
import {useEffect} from 'react/cjs/react.development';

const PriodScreen = ({pomodoro, navigation}) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);
  const [min, setMin] = useState(0);
  const [period, setPeriod] = useState(0);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);

    increment.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(true);
    setIsActive(false);
  };

  const handleResume = () => {
    setIsPaused(false);
    setIsActive(true);
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
    if (minutes < 1) {
      setMin(minutes);
      return `${getMinutes} : ${getSeconds}`;
    } else {
      handleReset();
      setPeriod(period => period + 1);
    }
  };

  const activeButton = () => {
    if (!isActive && !isPaused) {
      handleStart();
    } else if (isActive && !isPaused) {
      handlePause();
    } else if (!isActive && isPaused) {
      handleResume();
    }
  };

  return (
    <View style={priodStyle.body}>
      {() => startTimer()}
      <View style={priodStyle.progressView}>
        <AnimatedCircularProgress
          size={300}
          width={40}
          fill={100 - min * 4}
          tintColor="#FECB1C"
          backgroundColor="#FFFFFF"
          rotation={-360}>
          {fill => <Text style={priodStyle.bigText}>{formatTime()}</Text>}
        </AnimatedCircularProgress>
      </View>

      {timer < 3 ? (
        <View style={priodStyle.imgView}>
          <Pressable
            class="press"
            onPress={() => activeButton()}
            style={priodStyle.pressable}>
            {isActive ? (
              <Image
                source={require(`../public/assets/image/pause.png`)}
                resizeMode="center"
                style={{width: 40, height: 40}}
              />
            ) : (
              <Image
                source={require(`../public/assets/image/play.png`)}
                resizeMode="center"
                style={{width: 70, height: 70}}
              />
            )}
          </Pressable>
        </View>
      ) : (
        <View style={challengeStyle.tagView}>
          <View style={{margin: 5}}>
            <Text style={challengeStyle.text}>
              5min challenge - Thử thách ngắn
            </Text>
          </View>
          <View style={challengeStyle.HoriLine} />
          <View style={challengeStyle.rowView}>
            <View style={{flex: 1}}>
              <Image
                style={challengeStyle.img}
                source={require('../public/assets/image/push-up.png')}
                resizeMode="center"
              />
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={challengeStyle.bigText}>chống đẩy</Text>
              <Text style={{fontSize: 20, fontWeight: '700', color: 'gray'}}>
                x5
              </Text>
            </View>
          </View>
          {() => handleReset()}
        </View>
      )}
      <View style={priodStyle.textView}>
        <View style={priodStyle.textViewText}>
          <Text style={priodStyle.text}>Bạn đã hoàn thành</Text>
          <Text style={priodStyle.text}>
            <Text style={priodStyle.bigText}>{period} </Text>
            chu kỳ
          </Text>
        </View>
        <View style={priodStyle.verticleLine} />
        <View style={priodStyle.textViewText}>
          <Text style={priodStyle.text}>Còn {4 - period} chu kỳ</Text>
          <Text style={priodStyle.bigText}>để nghỉ dài</Text>
        </View>
      </View>
    </View>
  );
};

export default PriodScreen;
