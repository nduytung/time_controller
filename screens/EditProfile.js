import React, {useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {useState} from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeUserInfo} from '../asyncFunctions/handleApi';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfile = ({route, navigation}) => {
  const {userData} = route.params;
  const [userInfo, setUserInfo] = useState(userData);
  const [filePath, setFilePath] = useState();

  const handleEditProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    await setUserInfo({...userInfo, avt: filePath.base64});
    const data = await changeUserInfo(userInfo, token);
    console.log('changing: ');
    console.log(userInfo);
    if (data.success == true) navigation.navigate('Tabs');
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }

        setFilePath(response.assets[0]);
      });
    }
  };

  const chooseFile = type => {
    console.log('triggered!');
    let options = {
      mediaType: type,
      maxWidth: 500,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log(response);
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      setFilePath(response.assets[0]);
    });
  };

  useEffect(() => {
    console.log(filePath);
  }, [filePath]);

  return (
    <ScrollView
      style={{
        flex: 1,
        height: '100%',
        padding: 15,
      }}>
      <Text style={{fontSize: 30, fontWeight: '700', marginVertical: 20}}>
        Sửa đổi cài đặt
      </Text>

      <View>
        <View style={{alignItems: 'center'}}>
          {filePath === undefined ? (
            <View
              style={{
                backgroundColor: '#ddd',
                width: 150,
                height: 150,
                borderRadius: 100,
                overflow: 'hidden',
              }}></View>
          ) : (
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
                overflow: 'hidden',
              }}
              source={{uri: filePath?.uri}}
            />
          )}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => captureImage('photo')}>
              <Text style={styles.textStyle}>Chụp ảnh</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => chooseFile('photo')}>
              <Text style={styles.textStyle}>Chọn ảnh </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 18, color: 'gray', fontWeight: '300'}}>
          Họ tên đầy đủ{' '}
        </Text>
        <TextInput
          value={(userInfo && userInfo.fullname) || 'user'}
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
          value={(userInfo && userInfo.email) || 'mail'}
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
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 2,
    marginHorizontal: 10,
    borderRadius: 7,
    marginVertical: 20,
    width: 150,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
