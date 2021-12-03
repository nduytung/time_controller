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

const TaskScreen = () => {
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
    <ScrollView style={{margin: 10}}>
      <View>
        <Text style={taskStyle.headerText}>Task trong tuần</Text>
      </View>

      {taskData?.map(task => {
        return (
          <View style={taskStyle.box1}>
            <View style={taskStyle.information}>
              <View style={taskStyle.leftInformation}>
                <Text style={taskStyle.leftInfor1}>Còn lại</Text>
                <Text style={taskStyle.leftInfor2}>{task.totalTime} </Text>
                <Text style={taskStyle.leftInfor3}>phút</Text>
              </View>
              <View style={taskStyle.rightInformation}>
                <Text style={taskStyle.rightInfor1}>{task.taskname} </Text>
                <Text style={taskStyle.rightInfor2}>{task.deadline}</Text>
                <Text style={taskStyle.rightInfor3}>{task.description}</Text>
                <TouchableOpacity style={taskStyle.touchFix} onPress={() => {}}>
                  <Text style={taskStyle.textFix}>Sửa</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
      <View style={{marginBottom: 90}}></View>
    </ScrollView>
  );
};

export default TaskScreen;
