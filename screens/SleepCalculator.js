import React, {useState} from 'react';
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
import CustomButton from '../components/CustomButton';
import sleepyStyle from '../public/assets/css/sleepyStyle';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';
import cycles from 'cycles';

const SleepyScreen = () => {
  const [time, setUserTime] = useState({
    minute: 0,
    hour: 0,
    cycle: [],
  });
  const [visible, setVisible] = useState(false);

  const calcTime = () => {
    console.log(time.hour + ':' + time.minute);
    if (
      time.hour > 23 ||
      time.minute > 59 ||
      time.hour <= 0 ||
      time.minute <= 0
    ) {
      setVisible(true);
      setUserTime({hour: 0, minute: 0});
    }
    let cycleObject = cycles.wake(`${time.hour}:${time.minute}`);
    cycleObject = Object.keys(cycleObject).map(key => [
      Number(key),
      cycleObject[key],
    ]);
    setUserTime({...time, cycle: cycleObject});
  };
  return (
    <ScrollView style={sleepyStyle.backgroundFont}>
      <Text style={sleepyStyle.helloText}>Chào buổi tối, Duy Tung!</Text>
      <Image
        style={sleepyStyle.imageF}
        source={require('../public/assets/image/sleep-screen.jpg')}></Image>
      <Text style={sleepyStyle.text}>Bạn muốn thức dậy vào lúc: </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <TextInput
          style={sleepyStyle.textInput}
          value={time.hour}
          keyboardType="decimal-pad"
          onChangeText={text => setUserTime({...time, hour: text})}
        />
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: '700',
          }}>
          giờ
        </Text>
        <TextInput
          style={sleepyStyle.textInput}
          value={time.minute}
          keyboardType="decimal-pad"
          onChangeText={text => setUserTime({...time, minute: text})}
        />
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: '700',
          }}>
          phút
        </Text>
      </View>

      <TouchableOpacity
        style={{
          borderRadius: 50,
          paddingHorizontal: 30,
          paddingVertical: 10,
          justifyContent: 'center',
          width: '95%',
          marginRight: 'auto',
          marginLeft: 'auto',
          borderWidth: 1,
          marginTop: 30,
          borderColor: '#FF69B4',
          marginVertical: 15,
        }}
        onPress={() => calcTime()}>
        <Text
          style={{
            color: '#FF69B4',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: '700',
          }}>
          Tính giờ báo thức
        </Text>
      </TouchableOpacity>
      <View style={sleepyStyle.time}>
        <View style={sleepyStyle.timeLeft}>
          <Text style={sleepyStyle.text1}>Hãy</Text>
          <Text style={sleepyStyle.text2}>Đi Ngủ</Text>
          <Text style={sleepyStyle.text1}>Vào</Text>
        </View>

        <View style={sleepyStyle.timeRight}>
          <Text style={sleepyStyle.textTime}>
            {(time.cycle[4] && time.cycle[4][1]) || 0} PM
          </Text>
          <Text style={sleepyStyle.textTime}>
            {(time.cycle[4] && time.cycle[3][1]) || 0} PM
          </Text>
          <Text style={sleepyStyle.textTime}>
            {(time.cycle[4] && time.cycle[2][1]) || 0} PM
          </Text>
        </View>
      </View>

      <View style={{marginBottom: 90}}>
        <Dialog
          visible={visible}
          onTouchOutside={() => {
            setVisible(false);
          }}
          footer={
            <DialogFooter>
              <DialogButton text="OK" onPress={() => setVisible(true)} />
            </DialogFooter>
          }>
          <DialogContent>
            <Text
              style={{textAlign: 'center', marginVertical: 30, fontSize: 16}}>
              Thời gian không hợp lệ, bạn hãy nhập lại nhé
            </Text>
          </DialogContent>
        </Dialog>
      </View>
    </ScrollView>
  );
};
export default SleepyScreen;
