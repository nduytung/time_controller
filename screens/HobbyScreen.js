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
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';

const HobbyScreen = ({route, navigation}) => {
  const {hobbyDetail} = route.params;
  const {name, time, level, often, calories, image, desc} = hobbyDetail;
  const [visible, setVisible] = useState(false);
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
      {!image ? (
        <View
          style={{
            backgroundColor: '#ddd',
            width: '100%',
            height: 200,
            borderRadius: 10,
            marginVertical: 30,
            overflow: 'hidden',
          }}></View>
      ) : (
        <Image
          style={{
            width: '100%',
            height: 200,
            marginVertical: 30,
            borderRadius: 10,
            overflow: 'hidden',
          }}
          source={{
            uri: `data:image/png;base64,${image}`,
          }}
        />
      )}
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
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
            Okay, chúc bạn may mắn nhé{' '}
          </Text>
        </DialogContent>
      </Dialog>
    </View>
  );
};

export default HobbyScreen;
