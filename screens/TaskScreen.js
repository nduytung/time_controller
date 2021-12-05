import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import taskStyle from '../public/assets/css/taskStyle';
import {getAllTaskInfo} from '../asyncFunctions/handleApi';
import moment from 'moment';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskScreen = () => {
  const [taskData, setTaskData] = useState([]);
  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(() => {
    const getInfo = async () => {
      const accessToken = await AsyncStorage.getItem('token');
      const data = await getAllTaskInfo(accessToken);
      console.log(data.tasks);
      await setTaskData(data.tasks);
      setRenderFlag(true);
    };
    getInfo();
  }, [renderFlag]);

  const calcDoneTask = deadline => {
    const today = new Date();
    const thisMonth = today.getMonth();
    const thisDay = today.getDay();
    const thisYear = today.getFullYear();

    if (thisYear > deadline.split('-')[0]) return true;
    if (thisMonth > deadline.split('-')[1]) return true;
    if (thisDay > deadline.split('-')[2]) return true;
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView
        style={{margin: 10, marginBottom: 70}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={taskStyle.headerText}>Task trong tuần</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: '65%'}}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 15,
                  textAlign: 'justify',
                }}>
                Tất cả các task (dù đã hoàn thành hay chưa) của bạn sẽ được thể
                hiện ở đây. Chúng sẽ được sắp xếp theo thứ tự giảm dần về độ ưu
                tiên. Hãy tranh thủ thời gian làm bài nhé!
              </Text>
            </View>
            <Image
              style={{width: 150, height: 150}}
              source={require('../public/assets/image/task-screen.jpg')}
            />
          </View>
        </View>

        {taskData
          .sort(
            (a, b) =>
              parseInt(b.deadline.split('T')[0].replace(/-/g, '')) -
              parseInt(a.deadline.split('T')[0].replace(/-/g, '')),
          )
          .map((task, i) => {
            const taskColor = calcDoneTask(task.deadline);
            return (
              <View
                key={i + 1}
                style={{
                  backgroundColor: taskColor ? '#cfcfcf' : '#eedecf',
                  marginTop: 20,
                  borderRadius: 15,
                  paddingHorizontal: 15,
                  paddingTop: 15,
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View style={taskStyle.information}>
                  <View style={taskStyle.leftInformation}>
                    <Text style={taskStyle.leftInfor1}>Thời gian tổng</Text>
                    <Text style={taskStyle.leftInfor2}>{task.totalTime} </Text>
                  </View>
                  <View style={taskStyle.rightInformation}>
                    <Text style={taskStyle.rightInfor1}>{task.taskname} </Text>
                    <Text style={taskStyle.rightInfor2}>
                      {task.deadline.split('T')[0]}
                    </Text>
                  </View>
                </View>
                <Text style={taskStyle.rightInfor3}>{task.description}</Text>
                {!taskColor ? (
                  <View style={{width: '30%'}}>
                    <CustomButton title={'Sửa'} />
                  </View>
                ) : (
                  <View style={{paddingBottom: 15}}></View>
                )}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default TaskScreen;
