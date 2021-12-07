import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {useState} from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeUserInfo} from '../asyncFunctions/handleApi';

const EditProfile = ({route, navigation}) => {
  const {userData} = route.params;
  const [userInfo, setUserInfo] = useState(userData);

  const handleEditProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    const data = await changeUserInfo(userInfo, token);
    console.log(data);
    if (data.success == true) navigation.navigate('Tabs');
  };

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        padding: 15,
      }}>
      <Text style={{fontSize: 30, fontWeight: '700', marginVertical: 20}}>
        Sửa đổi cài đặt
      </Text>

      <View>
        <Text style={{fontSize: 18, color: 'gray', fontWeight: '300'}}>
          Họ tên đầy đủ{' '}
        </Text>
        <TextInput
          value={userInfo.fullname}
          onChangeText={text => setUserInfo({...userInfo, fullname: text})}
          style={{
            padding: 7,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 7,
            color: 'gray',
            marginVertical: 7,
            fontSize: 16,
            fontWeight: '500',
            width: '100%',
          }}
        />
      </View>

      <View>
        <Text style={{fontSize: 18, color: 'gray', fontWeight: '300'}}>
          Email{' '}
        </Text>
        <TextInput
          value={userInfo.email}
          onChangeText={text => setUserInfo({...userInfo, email: text})}
          style={{
            padding: 7,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 7,
            color: 'gray',
            marginVertical: 7,
            fontSize: 16,
            fontWeight: '500',
            width: '100%',
          }}
        />
      </View>

      <View>
        <Text style={{fontSize: 18, color: 'gray', fontWeight: '300'}}>
          Mật khẩu{' '}
        </Text>
        <TextInput
          placeholder="Password..."
          onChangeText={text => setUserInfo({...userInfo, password: text})}
          secureTextEntry={true}
          style={{
            padding: 7,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 7,
            color: 'gray',
            marginVertical: 7,
            fontSize: 16,
            fontWeight: '500',
            width: '100%',
          }}
        />
      </View>

      <View>
        <Text style={{fontSize: 18, color: 'gray', fontWeight: '300'}}>
          Nhập lại mật khẩu{' '}
        </Text>
        <TextInput
          placeholder="Password..."
          secureTextEntry={true}
          style={{
            padding: 7,
            borderWidth: 1,
            borderColor: 'lightgray',
            borderRadius: 7,
            color: 'gray',
            marginVertical: 7,
            fontSize: 16,
            fontWeight: '500',
            width: '100%',
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          handleEditProfile();
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
          marginBottom: 120,
          borderWidth: 1,
        }}>
        <Text style={{color: '#815fde', fontSize: 18, textAlign: 'center'}}>
          Lưu thay đổi{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
