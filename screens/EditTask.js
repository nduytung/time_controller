import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeUserInfo, handleEditTask} from '../asyncFunctions/handleApi';
import StarRating from 'react-native-star-rating';
import DatePicker from 'react-native-date-picker';

const EditTask = ({route, navigation}) => {
  const {taskInfo} = route.params;
  const [userInfo, setUserInfo] = useState(taskInfo);
  const [open, setOpen] = useState(false);

  const editTaskHandler = async () => {
    const data = await handleEditTask(userInfo);
    console.log(data);
    if (data?.success === true) navigation.navigate('TaskScreen');
  };

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 30, fontWeight: '700', marginVertical: 20}}>
        Sửa đổi cài đặt task{' '}
      </Text>

      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
          Tên task mới{' '}
        </Text>
        <TextInput
          value={userInfo?.taskname}
          onChangeText={text => setUserInfo({...userInfo, taskname: text})}
          style={{
            padding: 7,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 7,
            color: 'gray',
            marginVertical: 7,
            fontSize: 16,
            fontWeight: '400',
            width: '100%',
          }}
        />
      </View>

      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
          Thời gian hoàn thành dự kiến{' '}
        </Text>
        <TextInput
          value={userInfo.totalTime.toString()}
          onChangeText={text =>
            setUserInfo({...userInfo, totalTime: parseInt(text)})
          }
          style={{
            padding: 7,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 7,
            color: 'gray',
            marginVertical: 7,
            fontSize: 16,
            fontWeight: '400',
            width: '100%',
          }}
        />
      </View>

      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
          Deadline{' '}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            value={userInfo?.deadline.toString().split('T')[0]}
            style={{
              borderColor: 'gray',
              flex: 1,
              marginRight: 15,
              borderWidth: 1,
              marginTop: 10,
              paddingVertical: 4,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: '#7CC88D',
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 15,
              width: 100,
              borderRadius: 10,
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
          date={new Date()}
          onConfirm={date => {
            setOpen(false);
            setUserInfo({...userInfo, deadline: date});
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>

      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          color: 'black',
          fontWeight: '500',
        }}>
        Bạn nghĩ việc này quan trọng đến đâu ?
      </Text>
      <View
        style={{
          width: '70%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginVertical: 5,
        }}>
        <StarRating
          disabled={false}
          maxStars={5}
          fullStarColor={'#f2b72e'}
          halfStarEnabled={true}
          rating={userInfo.importantRate / 2}
          selectedStar={rating =>
            setUserInfo({...userInfo, importantRate: parseInt(rating * 2)})
          }
        />
      </View>

      <View>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
          Nhập lại mô tả{' '}
        </Text>
        <TextInput
          value={userInfo.description}
          multiline={true}
          numberOfLines={20}
          style={{
            padding: 7,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 7,
            color: 'gray',
            marginVertical: 7,
            height: 200,
            textAlign: 'left',
            fontSize: 18,
            fontWeight: '400',
            width: '100%',
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          editTaskHandler();
        }}
        style={{
          width: '90%',
          borderColor: '#815fde',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderWidth: 1,
        }}>
        <Text style={{color: '#815fde', fontSize: 18, textAlign: 'center'}}>
          Lưu thay đổi{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTask;
