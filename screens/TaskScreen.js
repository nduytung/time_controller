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
import {getAllTaskInfo, handleDeleteTask} from '../asyncFunctions/handleApi';
import moment from 'moment';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';
import StarRating from 'react-native-star-rating';

const TaskScreen = ({navigation}) => {
  const [taskData, setTaskData] = useState([]);
  const [renderFlag, setRenderFlag] = useState(false);
  const [visible, setVisible] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(0);
  const [token, setToken] = useState();

  const handleEditTask = taskInfo => {
    navigation.navigate('EditTask', {taskInfo});
  };

  useEffect(() => {
    const getInfo = async () => {
      const accessToken = await AsyncStorage.getItem('token');
      await setToken(accessToken);
      const data = await getAllTaskInfo(accessToken);
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

  const deleteTask = async () => {
    const data = await handleDeleteTask(deleteTaskId, token);
    console.log(data);

    await setDeleteTaskId(0);
    await setVisible(false);
    setRenderFlag(renderFlag => !renderFlag);
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

        {taskData.map((task, i) => {
          console.log(task);
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
                  <Text style={taskStyle.rightInfor1}>{task.taskname}</Text>
                  <Text style={taskStyle.rightInfor2}>
                    {task.deadline.split('T')[0]} -{' '}
                    <Text style={{color: 'gray'}}>
                      {task.done}/{task.pomodoroPeriod}
                    </Text>
                  </Text>
                  <View
                    style={{
                      width: '40%',

                      margin: 5,
                    }}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      starSize={20}
                      fullStarColor={'#f2b72e'}
                      halfStarEnabled={true}
                      rating={task.importantRate / 2}
                    />
                  </View>
                </View>
              </View>
              <Text style={taskStyle.rightInfor3}>{task.description}</Text>
              {!taskColor ? (
                <View
                  style={{
                    width: '60%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible(true);
                      setDeleteTaskId(task._id);
                    }}
                    style={{
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      height: 42,
                      marginRight: 10,
                      borderWidth: 1,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                      }}>
                      Xóa task{' '}
                    </Text>
                  </TouchableOpacity>
                  <CustomButton
                    callback={() => handleEditTask(task)}
                    title={'Sửa'}
                  />
                </View>
              ) : (
                <View style={{paddingBottom: 15}}></View>
              )}
            </View>
          );
        })}
      </ScrollView>
      <Dialog
        visible={visible}
        onTouchOutside={() => {
          setVisible(false);
        }}
        footer={
          <DialogFooter>
            <DialogButton text="Hủy" onPress={() => setVisible(false)} />
            <DialogButton text="Xóa" onPress={() => deleteTask()} />
          </DialogFooter>
        }>
        <DialogContent>
          <Text style={{textAlign: 'center', marginVertical: 30, fontSize: 16}}>
            Bạn có chắc muốn xóa VĨNH VIỄN task này?{' '}
          </Text>
        </DialogContent>
      </Dialog>
    </View>
  );
};

export default TaskScreen;
