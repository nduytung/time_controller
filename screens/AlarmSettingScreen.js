import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AlarmStyle from '../public/assets/css/alarmstyle';
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';

const AlarmSettingScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState();

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'noti-channel',
      channelName: 'Main Notification Channel',
    });
  };

  const handleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'noti-channel',
      title: 'Ôi bạn ơi...',
      date: date,
      message: 'Ngồi vào làm việc đi chứ còn gì nữa bạn',
      allowWhileIdle: true,
      repeatTime: 1,
    });
  };

  const createNoti = () => {
    createChannels();
    handleNotification();
    navigation.navigate('AddTask1');
  };
  return (
    <View style={AlarmStyle.container}>
      <View style={[AlarmStyle.alarmsetting, {backgroundColor: '#EDF2F5'}]}>
        <Text style={AlarmStyle.texttille}>Cam kết</Text>
        <Text style={AlarmStyle.text}>
          Bạn có muốn đặt báo thức nhắc nhở mỗi ngày?
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <TextInput
            value={date.toISOString().split('T')[1].split('.')[0]}
            style={{
              borderColor: 'gray',
              flex: 1,
              marginRight: 15,
              borderWidth: 1,
              marginTop: 20,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 15,
            }}
          />
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: '#7CC88D',
              marginTop: 20,
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

          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => createNoti()}
          style={{
            backgroundColor: '#7CC88D',
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 15,
            width: '100%',
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            Đồng ý{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlarmSettingScreen;
