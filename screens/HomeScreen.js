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

const HomeScreen = ({navigation}) => {
  const [taskData, setTaskData] = useState([]);
  const [taskLeft, setTaskLeft] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [donePercentage, setDonePercentage] = useState();
  const [renderFlag, setRenderFlag] = useState(false);

  const getInfo = useCallback(async () => {
    let remainTask = 0;
    let remainTime = 0;
    let totalTaskTime = 0;
    let doneTaskTime = 0;

    const data = await getAllTaskInfo();
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
    getInfo();
  }, [renderFlag]);

  return (
    <ScrollView style={progressStyle.body}>
      <ScrollView>
        <View class="Sec1" style={progressStyle.sec1}>
          <View class="Text" style={progressStyle.sec1text}>
            <Text style={progressStyle.hello}>Xin chao!</Text>
            <Text style={progressStyle.text}>Duy Tung</Text>
          </View>
          <View style={progressStyle.sec1img}>
            <Image
              style={progressStyle.img}
              source={Duck}
              resizeMode="center"
            />
          </View>
        </View>

        <View class="sec2" style={progressStyle.sec2}>
          <View style={progressStyle.progress}>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={donePercentage || 0}
              tintColor="#FFFFFF"
              backgroundColor="#FFDC65"
              rotation={-360}>
              {fill => (
                <Text style={progressStyle.text}>{donePercentage}%</Text>
              )}
            </AnimatedCircularProgress>
          </View>
          <View style={progressStyle.sec2text}>
            <Text style={(progressStyle.text, {textAlign: 'left'})}>
              Bạn đã hoàn thành
            </Text>
            <Text style={progressStyle.bigText}>
              <Text style={progressStyle.textImpress}>
                {taskData.length - taskLeft}
              </Text>{' '}
              Streaks!
            </Text>
          </View>
        </View>
        <Pressable class="press" style={progressStyle.pressable}>
          <Text
            onPress={() => navigation.navigate('PriodScreen')}
            style={progressStyle.textInButton}>
            Làm việc!
          </Text>
        </Pressable>

        <Text style={progressStyle.extentText}>Task tuần này</Text>
        <View style={{flex: 0.6}}>
          <ScrollView style={progressStyle.scroll} horizontal={true}>
            <View style={progressStyle.scrollview}>
              <Text style={(progressStyle.text, {color: '#FFFFFF'})}>
                Hiện còn lại{' '}
              </Text>
              <Text style={progressStyle.bigText}>{taskLeft} việc</Text>
              <Text style={progressStyle.text}>
                <Text style={{color: '#FFFFFF'}}>tuần này</Text>
              </Text>
              <Pressable
                style={progressStyle.pressable}
                onPress={() => {
                  navigation.navigate('TaskScreen');
                }}>
                <Text style={progressStyle.textInButton}>Xem</Text>
              </Pressable>
            </View>

            <View style={progressStyle.scrollview}>
              <Text style={progressStyle.text}>Số phút tập trung còn lại</Text>
              <Text style={progressStyle.bigText}>{timeLeft}</Text>
              <Pressable style={progressStyle.pressable}>
                <Text style={progressStyle.textInButton}>Xem</Text>
              </Pressable>
            </View>
            <View style={progressStyle.scrollview}>
              <Text style={progressStyle.text}>Tổng số task của tuần này</Text>
              <Text style={progressStyle.bigText}>{taskData.length}</Text>
              <Pressable style={progressStyle.pressable}>
                <Text style={progressStyle.textInButton}>Xem</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={progressStyle.extentText}>Làm gì hôm nay?</Text>
          <View style={global.box}>
            <Image
              style={global.imageJob}
              source={require('../public/assets/image/bike.jpg')}></Image>
            <View style={global.infor}>
              <Text style={global.textTime}>20min - 4/5</Text>
              <Text style={global.textWork}>Đạp xe gần nhà 2km</Text>
            </View>
          </View>

          <View style={global.box}>
            <Image
              style={global.imageJob}
              source={require('../public/assets/image/bike.jpg')}></Image>
            <View style={global.infor}>
              <Text style={global.textTime}>20min - 4/5</Text>
              <Text style={global.textWork}>Đạp bộ quanh nhà 1km</Text>
            </View>
          </View>

          <View style={global.box}>
            <Image
              style={global.imageJob}
              source={require('../public/assets/image/book.jpg')}></Image>
            <View style={global.infor}>
              <Text style={global.textTime}>20min - 4/5</Text>
              <Text style={global.textWork}>Báo cáo CK thiết kế mạng</Text>
            </View>
          </View>

          <View style={global.box}>
            <Image
              style={global.imageJob}
              source={require('../public/assets/image/book.jpg')}></Image>
            <View style={global.infor}>
              <Text style={global.textTime}>20min - 4/5</Text>
              <Text style={global.textWork}>
                Làm deadline di động Lab3 SQL Lite, Làm 3 bai
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
