import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import detail from '../public/assets/css/detail';
import StarRating from 'react-native-star-rating';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';
import {handleSetNewHobby} from '../asyncFunctions/handleApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SetHobbyScreen = ({navigation}) => {
  const [filePath, setFilePath] = useState();
  const [hobby, setHobby] = useState({
    name: '',
    time: 0,
    level: 0,
    often: 0,
    calories: 0,
    image: '',
    desc: '',
  });

  const [visible, setVisible] = useState(false);

  const setNewHobby = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(hobby);
    await setHobby({...hobby, image: filePath.base64});
    const data = await handleSetNewHobby(token, hobby);
    if (data.success === true) setVisible(true);
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
    let options = {
      mediaType: type,
      maxWidth: 500,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
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

  return (
    <ScrollView style={{padding: 15, paddingTop: 40}}>
      <View>
        <View style={detail.box}>
          <Image
            style={detail.image}
            source={require('../public/assets/image/bike.png')}
          />
          <View style={detail.information}>
            <TextInput
              value={hobby.name}
              placeholder="Tên hoạt động"
              onChangeText={text => setHobby({...hobby, name: text})}
              style={{
                borderWidth: 1,
                marginBottom: 10,
                padding: 5,
                borderRadius: 10,
                borderColor: 'lightgrey',
                width: '100%',
              }}
            />
            <StarRating
              disabled={false}
              maxStars={5}
              fullStarColor={'#f2b72e'}
              halfStarEnabled={true}
              rating={(hobby && hobby.level / 2) || 0}
              starSize={30}
              width={'100%'}
              selectedStar={rating =>
                setHobby({...hobby, level: parseInt(rating * 2)})
              }
            />
          </View>
        </View>
        <View style={detail.modifyInfor}>
          <Text style={detail.modifyText1}>
            Độ khó: {(hobby && hobby.level) || 0}/10
          </Text>
          <Text style={detail.modifyText1}>Calories: </Text>
          <TextInput
            value={hobby.calories}
            keyboardType="number-pad"
            onChangeText={text => setHobby({...hobby, calories: text})}
            style={{
              padding: 8,
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 10,
              borderColor: 'lightgray',
              width: '100%',
            }}
          />
          <Text style={detail.modifyText1}>Thời gian: </Text>
          <TextInput
            keyboardType="number-pad"
            value={hobby.time}
            onChangeText={text => setHobby({...hobby, time: text})}
            style={{
              padding: 8,
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 10,
              borderColor: 'lightgray',
              width: '100%',
            }}
          />
          <Text style={detail.modifyText1}>
            Cường độ luyện tập: (lần/tuần){' '}
          </Text>
          <TextInput
            keyboardType="number-pad"
            value={hobby.often}
            onChangeText={text => setHobby({...hobby, often: text})}
            style={{
              padding: 8,
              marginBottom: 10,
              borderRadius: 10,
              borderColor: 'lightgray',
              borderWidth: 1,
              width: '100%',
            }}
          />
        </View>
      </View>
      <View style={detail.modifyInfor}>
        <Text style={detail.modifyText1}>Chi tiết </Text>

        <TextInput
          multiline={true}
          numberOfLines={15}
          value={hobby.desc}
          onChangeText={text => setHobby({...hobby, desc: text})}
          style={{
            padding: 8,
            borderRadius: 10,
            marginBottom: 10,
            borderColor: 'lightgray',
            textAlignVertical: 'top',
            height: 15,
            borderWidth: 1,
            height: 200,
            width: '100%',
          }}
        />
      </View>
      {filePath === undefined ? (
        <View
          style={{
            backgroundColor: '#ddd',
            width: '100%',
            height: 200,
            borderRadius: 10,
            overflow: 'hidden',
          }}></View>
      ) : (
        <Image
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
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
      <TouchableOpacity
        onPress={() => {
          setNewHobby();
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
          marginBottom: 50,
          backgroundColor: '#815fde',
          borderWidth: 1,
        }}>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
          Thêm mới
        </Text>
      </TouchableOpacity>
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
          <Text style={{textAlign: 'center', marginVertical: 30, fontSize: 16}}>
            Đã thêm thành công, bạn sẽ được đưa về trang chủ{' '}
          </Text>
        </DialogContent>
      </Dialog>
    </ScrollView>
  );
};

export default SetHobbyScreen;

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
