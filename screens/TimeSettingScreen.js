import React, {useState} from 'react';
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
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';
import TimeSettingstyles from '../public/assets/css/timesetting';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserSetting} from '../asyncFunctions/handleApi';

const TimeSettingScreen = ({navigation}) => {
  const pomodorotimes = ['1 phut', '25 phút', '40 phút', '55 phút'];
  const resttime = ['1 phut', '5 phút', '10 phút', '15 phút'];

  const [setting1, setSetting1] = useState();

  const handleNewUserSetting = async () => {
    const token = await AsyncStorage.getItem('token');
    const data = await setUserSetting(setting1, token);
    if (data.success === true) navigation.navigate('AlarmSettingScreen');
  };

  return (
    <View style={TimeSettingstyles.container}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 20,
            marginTop: 40,
          }}>
          Cài đặt thời gian
        </Text>
      </View>
      <View style={TimeSettingstyles.pomodoro}>
        <View style={TimeSettingstyles.View}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              marginBottom: 20,
              color: 'black',
            }}>
            Pomodoro
          </Text>
          <View style={TimeSettingstyles.pomodoroDetail}>
            <Image
              source={require('../public/assets/image/pomodoro.png')}
              style={TimeSettingstyles.stretch}
            />
            <Text
              style={{
                marginTop: 25,
                width: 190,
                marginLeft: 'auto',
                textAlign: 'justify',
                fontSize: 16,
              }}>
              Thời gian "tối đa" mà bạn có thể tập trung mỗi lần. Thời gian này
              không nên dài quá 45 phút đâu bạn nhé!
            </Text>
          </View>
          <View style={TimeSettingstyles.selecttime}>
            <SelectDropdown
              data={pomodorotimes}
              onSelect={(selectedItem, index) => {
                setSetting1({
                  ...setting1,
                  pomodoroTime: parseInt(selectedItem.split(' ')[0]),
                });
              }}
              defaultButtonText={'Chọn thôi nào'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={TimeSettingstyles.dropdown1BtnStyle}
              buttonTextStyle={TimeSettingstyles.dropdown1BtnTxtStyle}
              renderDropdownIcon={() => {
                return (
                  <FontAwesome name="chevron-down" color={'#444'} size={18} />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={TimeSettingstyles.dropdown1DropdownStyle}
              rowStyle={TimeSettingstyles.dropdown1RowStyle}
              rowTextStyle={TimeSettingstyles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
      </View>
      <View style={TimeSettingstyles.rest}>
        <View style={TimeSettingstyles.View}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'right',
            }}>
            Thời gian nghỉ
          </Text>
          <Text style={{fontSize: 16, marginTop: 10, textAlign: 'right'}}>
            Chọn thời gian mà bạn muốn nghỉ sau mỗi chu kì pomodoro. Đừng dài
            hơn 10 phút nhé!
          </Text>
          <View style={TimeSettingstyles.restDetail}>
            <View style={TimeSettingstyles.selecttime}>
              <SelectDropdown
                data={resttime}
                onSelect={(selectedItem, index) => {
                  setSetting1({
                    ...setting1,
                    breaktime: parseInt(selectedItem.split(' ')[0]),
                  });
                }}
                defaultButtonText={'Chọn thôi nào'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={TimeSettingstyles.dropdown2BtnStyle}
                buttonTextStyle={TimeSettingstyles.dropdown1BtnTxtStyle}
                renderDropdownIcon={() => {
                  return (
                    <FontAwesome name="chevron-down" color={'#444'} size={18} />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={TimeSettingstyles.dropdown1DropdownStyle}
                rowStyle={TimeSettingstyles.dropdown1RowStyle}
                rowTextStyle={TimeSettingstyles.dropdown1RowTxtStyle}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleNewUserSetting();
        }}>
        <Text
          style={{
            color: '#6595dc',
            fontSize: 20,
            fontWeight: '700',
            textAlign: 'right',
            marginVertical: 20,
          }}>
          Tiếp theo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeSettingScreen;
