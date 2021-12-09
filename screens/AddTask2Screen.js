import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import DatePicker from 'react-native-date-picker';
import {createNewTask} from '../asyncFunctions/handleApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';

const AddTask2Screen = ({route, navigation}) => {
  const [open, setOpen] = useState();
  const {task1Info} = route.params;
  const [visible, setVisible] = useState(false);

  const [taskData, setTaskData] = useState({
    ...task1Info,
    importantRate: 0,
    totalTime: 0,
    deadline: new Date(),
    pomodoroPeriod: 0,
  });

  const handleCreateTask = async () => {
    const token = await AsyncStorage.getItem('token');
    const data = await createNewTask(taskData, token);
    if (data.success === true) setVisible(true);
  };

  return (
    <View style={addtask2Style.container}>
      <View>
        <Text style={addtask2Style.tittle}>Thêm task</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            color: 'gray',
            marginTop: 5,
          }}>
          Tất cả các trường bên dưới đều là BẮT BUỘC
        </Text>
      </View>
      <View>
        <Text style={addtask2Style.textques}>Deadline (ngày)</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            value={taskData.deadline.toString()}
            style={{
              borderColor: 'gray',
              flex: 1,
              marginRight: 15,
              borderWidth: 1,
              marginTop: 40,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 15,
            }}
          />
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: '#7CC88D',
              marginTop: 40,
              paddingVertical: 10,
              paddingHorizontal: 15,
              width: 100,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '400',
                textAlign: 'center',
              }}>
              Chọn
            </Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={taskData.deadline}
          onConfirm={date => {
            setOpen(false);
            setTaskData({...taskData, deadline: date});
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <TextInput
          placeholder="Thời gian ước lượng (min)"
          style={addtask2Style.timeInput}
          keyboardType="decimal-pad"
          onChangeText={text => {
            setTaskData({
              ...taskData,
              pomodoroPeriod: parseInt(text / 25),
              totalTime: parseInt(text),
            });
          }}
        />
        <Text style={addtask2Style.textques}>
          Bạn nghĩ việc này quan trọng đến đâu ?
        </Text>
        <View
          style={{
            width: '70%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginVertical: 20,
          }}>
          <StarRating
            disabled={false}
            maxStars={5}
            fullStarColor={'#f2b72e'}
            halfStarEnabled={true}
            rating={taskData.importantRate / 2}
            selectedStar={rating =>
              setTaskData({...taskData, importantRate: parseInt(rating * 2)})
            }
          />
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
            <Text
              style={{textAlign: 'center', marginVertical: 30, fontSize: 16}}>
              Tạo task thành công, bạn sẽ được đưa về trang chủ{' '}
            </Text>
          </DialogContent>
        </Dialog>
        <View>
          <View style={addtask2Style.importantlevel}>
            <View
              style={[addtask2Style.circlelevel, {backgroundColor: '#7CC88D'}]}
            />
            <Text style={addtask2Style.textimportant}>1. Không hẳn</Text>
          </View>
          <View style={addtask2Style.importantlevel}>
            <View
              style={[addtask2Style.circlelevel, {backgroundColor: '#F5E094'}]}
            />
            <Text style={addtask2Style.textimportant}>
              2. Sẽ ảnh hưởng trong tương lai
            </Text>
          </View>
          <View style={addtask2Style.importantlevel}>
            <View
              style={[addtask2Style.circlelevel, {backgroundColor: '#EB7C7C'}]}
            />
            <Text style={addtask2Style.textimportant}>
              3. Dealine, bài tập tuần
            </Text>
          </View>
          <View style={addtask2Style.importantlevel}>
            <View
              style={[addtask2Style.circlelevel, {backgroundColor: '#F89045'}]}
            />
            <Text style={addtask2Style.textimportant}>
              4. Khá quan trọng và gấp
            </Text>
          </View>
          <View style={addtask2Style.importantlevel}>
            <View
              style={[addtask2Style.circlelevel, {backgroundColor: '#E31111'}]}
            />
            <Text style={addtask2Style.textimportant}>
              5. Không làm là tới công chiện
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTask1')}
            style={[
              addtask2Style.buttonPrev,
              {
                borderColor: '#4dc2f8',
                borderWidth: 1,
                marginTop: 40,
              },
            ]}>
            <Text style={[addtask2Style.textNext, {color: '#5db8fe'}]}>
              Trở về
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleCreateTask()}
            style={[
              addtask2Style.buttonNext,
              {
                borderColor: '#4dc2f8',
                borderWidth: 1,
                marginTop: 40,
              },
            ]}>
            <Text style={[addtask2Style.textNext, {color: 'white'}]}>
              Tiếp Tục
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddTask2Screen;

const addtask2Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  tittle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: '300',
  },
  timeInput: {
    marginTop: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
  },
  textques: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderColor: '#31BAFD',
    borderWidth: 1,
    marginLeft: 'auto',
  },
  circleblue: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#31BAFD',
  },
  importantstraight: {
    backgroundColor: '#31BAFD',
    width: Dimensions.get('window').width / 5,
    height: 8,
    marginTop: 15,
  },

  importantlevel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  circlelevel: {
    width: 25,
    height: 25,
    borderRadius: 18,
  },
  textimportant: {
    marginLeft: 15,
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
  },
  circlestep: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderColor: '#31BAFD',
    borderWidth: 1,
  },
  circlebluestep: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#31BAFD',
  },
  straight: {
    backgroundColor: '#31BAFD',
    width: Dimensions.get('window').width / 3,
    height: 10,
    marginTop: 18,
    marginLeft: -1,
  },
  textNext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonNext: {
    flex: 1,
    backgroundColor: '#5db8fe',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  buttonPrev: {
    flex: 1,
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
  },
});
