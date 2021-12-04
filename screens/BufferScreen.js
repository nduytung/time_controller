import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
const BufferScreen = ({navigation}) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#dfd3eb',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 100,
      }}>
      <Image
        style={{width: 350, height: 350, borderRadius: 15, overflow: 'hidden'}}
        source={require('../public/assets/image/buffer.jpg')}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '300',
          color: 'black',
          paddingTop: 180,
        }}>
        Thêm nhiệm vụ, bài tập tuần và các thứ các thứ ở đây!
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 7,
          paddingHorizontal: 150,
          paddingVertical: 10,
          justifyContent: 'center',
          backgroundColor: 'white',
          marginVertical: 15,
        }}
        onPress={() => navigation.navigate('AddTask1')}>
        <Text style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
          Bắt đầu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BufferScreen;
