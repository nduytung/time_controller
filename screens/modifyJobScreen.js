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
  TouchableOpacity
} from 'react-native';
import detail from '../public/assets/css/detail';
import TextTicker from 'react-native-text-ticker';

const modifyJobScreen = () => {

  const [star, setStar] = useState(5)
  const [maxRate, setMaxrate] = useState([1,2,3,4,5])
  const starfill = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starcorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

  const CustomRating = () => {
    return(
      <View style={detail.customRating}>
        {
          maxRate.map((item, key) => {
            return(
              <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => setStar(item)}>
                <Image style={detail.starImg} source={item <= star ? {uri: starfill} : {uri: starcorner}}></Image>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
  return(
        <ScrollView style = {detail.boder}>
        <View style={detail.box}>
          <Image style={detail.image} source={require("./bike.jpg")}></Image>
          <View style={detail.information}>
            <TextTicker style={detail.mdifyTitle}>Đạp xe</TextTicker>
            <CustomRating></CustomRating>
          </View>
        </View>
        <View style={detail.modifyInfor}>
          <TextTicker style={detail.modifyText1}>Độ khó: 5/10</TextTicker>
          <TextTicker style={detail.modifyText1}>Calories: 200</TextTicker>
          <TextTicker style={detail.modifyText1}>Thời gian: 20 mins</TextTicker>
          <TextTicker style={detail.modifyText1}>Cường độ luyện tập: 1 lần/ tuần</TextTicker>
        </View>
        <View style={detail.modifyInfor}>
          <Text style={detail.modifyText}>Đây là một đoạn text dùng để kiểm tra nội dung được hiển thị, đồng thời xem việc tự động xuống dòng của văn bản</Text>
        </View>
        <TouchableOpacity style={detail.saveChange}>
          <Text style={detail.textbold}>LƯU THAY ĐỔI</Text>
        </TouchableOpacity>
        <View style={{padding: 80}}></View>
      </ScrollView>
  )
  
}

export default modifyJobScreen;
