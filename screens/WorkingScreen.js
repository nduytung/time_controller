import React, {useRef, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import priodStyle from '../public/assets/css/priodStyle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import challengeStyle from '../public/assets/css/challenge';
import {useEffect} from 'react/cjs/react.development';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';
import {handleAddPomodoro} from '../asyncFunctions/handleApi';

const PriodScreen = ({route, navigation}) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);
  const [min, setMin] = useState(0);
  const [period, setPeriod] = useState(0);
  const [resting, setResting] = useState(false);
  const {taskDetail, pomodoroTime, breaktime, leftTask} = route?.params;
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(false);

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

  const formatTime = async () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    let tempHolder = resting ? breaktime : pomodoroTime;

    if (minutes < tempHolder) {
      setMin(minutes);
      return `${getMinutes} : ${getSeconds}`;
    } else {
      if (period < leftTask) {
        handleReset();
        setResting(resting => !resting);
        await sendWorkingData();
        setPeriod(period => period + 1);
      } else {
        handleReset();
        setVisible(true);
      }
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

  const sendWorkingData = async () => {
    await handleAddPomodoro(taskDetail._id);
  };

  return (
    <View style={priodStyle.body}>
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

      {!resting ? (
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
      <View style={{paddingHorizontal: 15, marginTop: 80}}>
        <Text style={{fontSize: 15}}>
          Task hiện tại:{' '}
          <Text style={{color: 'black'}}>
            {(taskDetail && taskDetail.taskname) || 'Task 01'}
          </Text>
        </Text>
        <Text style={{fontSize: 15}}>
          Thời gian dự kiến:{' '}
          <Text style={{color: 'black'}}>
            {(taskDetail && taskDetail.startDay.split('T')[0]) || 'today'} -{' '}
            {(taskDetail && taskDetail.endDay.split('T')[0]) || 'today'}
          </Text>
        </Text>
      </View>
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
          <Text style={priodStyle.text}>
            Còn {taskDetail.taskPerDay - period} chu kỳ
          </Text>
          <Text style={priodStyle.bigText}>để nghỉ dài</Text>
        </View>
      </View>

      <Dialog
        visible={visible}
        onTouchOutside={() => {
          setVisible(false);
        }}
        footer={
          <DialogFooter>
            <DialogButton
              text="OK"
              onPress={() => {
                setVisible(false);
                navigation.navigate('Tabs');
              }}
            />
          </DialogFooter>
        }>
        <DialogContent>
          <Text style={{textAlign: 'center', marginVertical: 30, fontSize: 16}}>
            Chúc mừng, bạn đã hoàn thành hết chu kỳ của task này!{' '}
          </Text>
        </DialogContent>
      </Dialog>
    </View>
  );
};

export default PriodScreen;
