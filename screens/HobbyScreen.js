import React, {useState} from 'react';
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
} from 'react-native';
import detail from '../public/assets/css/detail';
import StarRating from 'react-native-star-rating';

const HobbyScreen = ({route, navigation}) => {
  const {hobbyDetail} = route.params;
  const {name, time, level, often, calories, image, desc} = hobbyDetail;

  return (
    <View style={detail.boder}>
      <View>
        <View style={detail.box}>
          <Image
            style={detail.image}
            source={require('../public/assets/image/bike.png')}
          />
          <View style={detail.information}>
            <Text style={detail.mdifyTitle}>{name} </Text>
            <StarRating
              disabled={true}
              maxStars={5}
              fullStarColor={'#f2b72e'}
              halfStarEnabled={true}
              rating={level / 2}
              starSize={30}
              width={'100%'}
            />
          </View>
        </View>
        <View style={detail.modifyInfor}>
          <Text style={detail.modifyText1}>Độ khó: {level}/10</Text>
          <Text style={detail.modifyText1}>Calories: {calories}</Text>
          <Text style={detail.modifyText1}>Thời gian: {time} mins</Text>
          <Text style={detail.modifyText1}>
            Cường độ luyện tập: {often} lần/ tuần
          </Text>
        </View>
      </View>
      <View style={detail.modifyInfor}>
        <Text style={detail.modifyText}>{desc}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleNotification();
          navigation.navigate('Login');
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
          backgroundColor: '#815fde',
          borderWidth: 1,
        }}>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
          Bắt đầu luyện tập
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HobbyScreen;
