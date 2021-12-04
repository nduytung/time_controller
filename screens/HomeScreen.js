import React, {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  progressStyleheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import progressStyle from '../public/assets/css/progressStyle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Duck from '../public/assets/image/duck.gif';
import Tabs from './TabNavigation';
import global from '../public/assets/css/global';
import TextTicker from 'react-native-text-ticker';
import {getAllTaskInfo} from '../asyncFunctions/handleApi';
import {activities} from '../components/activitiesData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const [taskData, setTaskData] = useState([]);
  const [taskLeft, setTaskLeft] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [donePercentage, setDonePercentage] = useState(0);
  const [renderFlag, setRenderFlag] = useState(false);

  const getInfo = useCallback(async accessToken => {
    let remainTask = 0;
    let remainTime = 0;
    let totalTaskTime = 0;
    let doneTaskTime = 0;

    console.log('token');
    console.log(typeof accessToken);
    const data = await getAllTaskInfo(accessToken);
    console.log(data.tasks);
    await setTaskData(data.tasks);

    await data.tasks.forEach(task => {
      totalTaskTime += task.totalTime;
      console.log('task: ' + task.pomodoroPeriod);
      if (task.done < task.pomodoroPeriod) {
        remainTask++;
        remainTime += (task.pomodoroPeriod - task.done) * 25;
      } else {
        doneTaskTime += task.totalTime;
      }
    });
    setTaskLeft(remainTask);
    setTimeLeft(remainTime);
    let percent = doneTaskTime / (totalTaskTime / 100);
    setDonePercentage(percent);
    setRenderFlag(true);
  }, []);

  //tinh toan ra so phut con lai va so task da xong

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('token');
        await getInfo(accessToken);
      } catch (err) {
        console.log(err);
      }
    };
    getToken();
  }, [renderFlag]);

  return (
    <ScrollView style={progressStyle.body}>
      <ScrollView>
        <View class="Sec1" style={progressStyle.sec1}>
          <View class="Text" style={progressStyle.sec1text}>
            <Text style={progressStyle.hello}>Xin chào!</Text>
            <Text style={progressStyle.text}>Chiến thôi, Duy Tung !</Text>
          </View>
          <View style={progressStyle.sec1img}>
            <Image
              style={progressStyle.img}
              source={require('../public/assets/image/user-avt.png')}
              resizeMode="center"
            />
          </View>
        </View>

        <View class="sec2" style={progressStyle.sec2}>
          <View style={progressStyle.progress}>
            <AnimatedCircularProgress
              size={110}
              width={16}
              fill={donePercentage || 0}
              tintColor="#FFFFFF"
              backgroundColor="#FFDC65"
              rotation={-360}>
              {fill => (
                <Text style={{color: 'white', fontSize: 20}}>
                  {donePercentage}%
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
          <View style={progressStyle.sec2text}>
            <Text style={{textAlign: 'left', fontSize: 18}}>
              Bạn đã hoàn thành
            </Text>
            <Text style={{fontSize: 40, fontWeight: '800', color: 'black'}}>
              <Text style={progressStyle.textImpress}>
                {taskData.length - taskLeft}
              </Text>{' '}
              Streaks!
            </Text>
          </View>
        </View>
        <Pressable class="press" style={progressStyle.mainbutton}>
          <Text
            onPress={() => navigation.navigate('WorkingScreen')}
            style={progressStyle.mainButtonText}>
            Làm việc
          </Text>
        </Pressable>

        <View>
          <Text style={progressStyle.extentText}>Task tuần này</Text>
          <View style={{flex: 0.5}}>
            <ScrollView
              style={progressStyle.scroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View class="task-detail" style={progressStyle.scrollview}>
                <View>
                  <Text style={progressStyle.text}>Tuần này hiện còn lại </Text>
                  <Text style={progressStyle.bigText}>{taskLeft} việc</Text>
                  <Text style={progressStyle.text}>
                    <Text style={{color: '#FFFFFF'}}></Text>
                  </Text>
                </View>
                <Pressable
                  style={progressStyle.pressable}
                  onPress={() => {
                    navigation.navigate('TaskScreen');
                  }}>
                  <Text style={progressStyle.textInButton}>Chi tiết</Text>
                </Pressable>
              </View>

              <View class="task-detail" style={progressStyle.scrollview}>
                <View>
                  <Text style={progressStyle.text}>Hỗ trợ tính toán</Text>
                  <Text style={progressStyle.bigText}>Chu kỳ giấc ngủ</Text>
                  <Text style={progressStyle.text}>
                    <Text style={{color: '#FFFFFF'}}></Text>
                  </Text>
                </View>
                <Pressable
                  style={progressStyle.pressable}
                  onPress={() => {
                    navigation.navigate('SleepCalculator');
                  }}>
                  <Text style={progressStyle.textInButton}>Chi tiết</Text>
                </Pressable>
              </View>

              <View class="task-detail" style={progressStyle.scrollview}>
                <View>
                  <Text style={progressStyle.text}>
                    Số việc bạn đã làm cùng ứng dụng
                  </Text>
                  <Text style={progressStyle.bigText}>{taskLeft} việc</Text>
                  <Text style={progressStyle.text}>
                    <Text style={{color: '#FFFFFF'}}></Text>
                  </Text>
                </View>
                <Pressable
                  style={progressStyle.pressable}
                  onPress={() => {
                    navigation.navigate('TaskScreen');
                  }}>
                  <Text style={progressStyle.textInButton}>Chi tiết</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={global.hobby}>
          <Text style={progressStyle.extentText}>Làm gì hôm nay?</Text>
          {activities.map((item, i) => {
            return (
              <View key={i + 1} style={global.box}>
                <Image
                  style={global.imageJob}
                  source={require('../public/assets/image/bike.png')}></Image>
                <View style={global.infor}>
                  <Text style={global.textTime}>
                    {' '}
                    {item.time} - {item.calories} calories
                  </Text>
                  <Text style={global.textWork}>{item.name}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
