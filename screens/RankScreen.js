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
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';
import {useEffect} from 'react/cjs/react.development';
import {getAllUsers} from '../asyncFunctions/handleApi';
import rankStyles from '../public/assets/css/rankStyle';

const RankScreen = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getAllUsers();
    const userListView = await res.userList.sort(
      (a, b) => b.pomodoroDone - a.pomodoroDone,
    );
    await setData(userListView);
  };

  useEffect(() => {
    getData();
  }, []);

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
            <View style={rankStyles.rank2Column}>
              <Text style={rankStyles.top3Text}> {data[1]?.username}</Text>
            </View>
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
            <View style={rankStyles.rank1Column}>
              <Text style={rankStyles.top3Text}> {data[0]?.username}</Text>
            </View>
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
            <View style={rankStyles.rank3Column}>
              <Text style={rankStyles.top3Text}> {data[2]?.username}</Text>
            </View>
          </View>
        </View>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUpBig"
        style={rankStyles.RankScreenfooter}>
        <ScrollView>{RankData(data)}</ScrollView>
      </Animatable.View>
    </View>
  );
};

const RankData = dataList => {
  return (
    dataList &&
    dataList.map((item, i) => {
      return (
        <View key={i + 1} style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 35}}>
            <Text style={rankStyles.rankNumber}>{i + 1}</Text>
          </View>
          <Image
            source={require('../public/assets/image/rank-icon.png')}
            style={{
              marginTop: 20,
              marginLeft: 10,
            }}
          />
          <View>
            <Text style={rankStyles.rankName}>{item.fullname}</Text>
            <Text style={rankStyles.rankCheckProfile}>{item.username}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 'auto',
              alignItems: 'center',
              marginTop: 20,
              marginRight: 10,
            }}>
            <Text style={rankStyles.rankPoint}>{item.pomodoroDone}</Text>
            <Image
              source={require('../public/assets/image/gem.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
        </View>
      );
    })
  );
};

export default RankScreen;
