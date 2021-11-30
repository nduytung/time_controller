import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';
import TextTicker from 'react-native-text-ticker';
import taskStyle from '../public/assets/css/taskStyle';

const TaskScreen = () => {
  return (
    <ScrollView style={{margin: 10}}>
      <View>
        <Text style={taskStyle.headerText}>Task trong tuần</Text>
      </View>

      <View style={taskStyle.box1}>
        <View style={taskStyle.information}>
          <View style={taskStyle.leftInformation}>
            <Text style={taskStyle.leftInfor1}>Còn lại</Text>
            <Text style={taskStyle.leftInfor2}>40</Text>
            <Text style={taskStyle.leftInfor3}>phút</Text>
          </View>
          <View style={taskStyle.rightInformation}>
            <TextTicker style={taskStyle.rightInfor1}>
              Thiết kế mạng{' '}
            </TextTicker>
            <Text style={taskStyle.rightInfor2}>27.11.2021</Text>
            <TextTicker style={taskStyle.rightInfor3}>
              Deadline kỳ này quá căng nên cần phải làm sớm thuiii
            </TextTicker>
            <TouchableOpacity style={taskStyle.touchFix} onPress={() => {}}>
              <Text style={taskStyle.textFix}>Sửa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={taskStyle.box2}>
        <View style={taskStyle.information}>
          <View style={taskStyle.leftInformation}>
            <Text style={taskStyle.leftInfor1}>Còn lại</Text>
            <Text style={taskStyle.leftInfor2}>60</Text>
            <Text style={taskStyle.leftInfor3}>phút</Text>
          </View>
          <View style={taskStyle.rightInformation}>
            <TextTicker style={taskStyle.rightInfor1}>
              An toàn mạng máy tính{' '}
            </TextTicker>
            <Text style={taskStyle.rightInfor2}>27.11.2021</Text>
            <TextTicker style={taskStyle.rightInfor3}>Bài tập lab3</TextTicker>
            <TouchableOpacity style={taskStyle.touchFix} onPress={() => {}}>
              <Text style={taskStyle.textFix}>Sửa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={taskStyle.box1}>
        <View style={taskStyle.information}>
          <View style={taskStyle.leftInformation}>
            <Text style={taskStyle.leftInfor1}>Còn lại</Text>
            <Text style={taskStyle.leftInfor2}>40</Text>
            <Text style={taskStyle.leftInfor3}>phút</Text>
          </View>
          <View style={taskStyle.rightInformation}>
            <TextTicker style={taskStyle.rightInfor1}>Di động</TextTicker>
            <Text style={taskStyle.rightInfor2}>27.11.2021</Text>
            <TextTicker style={taskStyle.rightInfor3}>
              Thực hành code với react native
            </TextTicker>
            <TouchableOpacity style={taskStyle.touchFix} onPress={() => {}}>
              <Text style={taskStyle.textFix}>Sửa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{marginBottom: 90}}></View>
    </ScrollView>
  );
};

export default TaskScreen;
