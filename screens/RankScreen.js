import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';
import rankStyles from '../public/assets/css/rankStyle';

const RankScreen = () => {
  return (
    <View style={rankStyles.RankScreencontainer}>
      <Text style={rankStyles.tittle}>Bảng xếp hạng</Text>
      <Animatable.View
        animation="fadeInUpBig"
        style={rankStyles.RankScreenHeader}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={require('../public/assets/image/rank-icon.png')}
              style={{
                width: 60,
                height: 60,
                marginLeft: 25,
                marginTop: 40,
              }}
            />
            <View style={rankStyles.rank2Column}></View>
          </View>
          <View>
            <Image
              source={require('../public/assets/image/rank-icon.png')}
              style={{
                width: 70,
                height: 70,
                marginLeft: 15,
              }}
            />
            <View style={rankStyles.rank1Column}></View>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <Image
              source={require('../public/assets/image/rank-icon.png')}
              style={{
                width: 50,
                height: 50,
                marginLeft: 25,
                marginTop: 70,
              }}
            />
            <View style={rankStyles.rank3Column}></View>
          </View>
        </View>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUpBig"
        style={rankStyles.RankScreenfooter}>
        <ScrollView>
          <RankData></RankData>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

const Data = [
  '1:Quach Tuan Anh:3000',
  '2:Dang Thanh Hau:2500',
  '3:Nguyen Duy Tung:2300',
  '4:Nguyen Phuc Khang:2300',
  '3:Nguyen Duy Tung:2300',
  '5:Nguyen Duy Tung:2300',
  '6:Nguyen Duy Tung:2300',
  '7:Nguyen Duy Tung:2300',
  '8:Nguyen Duy Tung:2300',
  '9:Nguyen Duy Tung:2300',
  '10:Nguyen Duy Tung:2300',
];

const RankData = () => {
  return Data.map(item => {
    var splitarray = item.split(':');
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 35}}>
          <Text style={rankStyles.rankNumber}>{splitarray[0]}</Text>
        </View>
        <Image
          source={require('../public/assets/image/rank-icon.png')}
          style={{
            marginTop: 20,
            marginLeft: 10,
          }}
        />
        <View>
          <Text style={rankStyles.rankName}>{splitarray[1]}</Text>
          <Text style={rankStyles.rankCheckProfile}>Check Profile</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
          <Text style={rankStyles.rankPoint}>{splitarray[2]}</Text>
          <Image
            source={require('../public/assets/image/rank-point.png')}
            style={{
              marginTop: 20,
            }}
          />
        </View>
      </View>
    );
  });
};

export default RankScreen;
