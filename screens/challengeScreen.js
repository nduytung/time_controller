import React from 'react';
import { challengeStyleheet, Text, View, Image, Pressable } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import challengeStyle from '../public/assets/css/challenge';

const App = () => {
  return (
    <View style={challengeStyle.body}>
      <View style={challengeStyle.progressView}>
        <AnimatedCircularProgress
          size={300}
          width={20}
          fill={90}
          tintColor="#FECB1C"
          backgroundColor="#FFFFFF"
          rotation={-360}>
          {fill => <Text style={challengeStyle.bigText}>5 Phút nghỉ</Text>}
        </AnimatedCircularProgress>
      </View>
      <View style={challengeStyle.tagView}>
        <View style={{margin: 5}}>
          <Text style={challengeStyle.text}>5 minute challenge</Text>
        </View>
        <View style={challengeStyle.HoriLine} />
        <View style={challengeStyle.rowView}>
          <View style={{flex: 1}}>
            <Image
              tyle={challengeStyle.img}
              source={require('./image9.png')}
              resizeMode="center"
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={challengeStyle.bigText}>chống đẩy</Text>
            <Text style={challengeStyle.text}>x5</Text>
          </View>
        </View>
      </View>

      <View style={challengeStyle.textView}>
        <View style={challengeStyle.textViewText}>
          <Text style={challengeStyle.text}>Bạn đã hoàn thành</Text>
          <Text style={challengeStyle.text}>
            <Text style={challengeStyle.bigText}>2 </Text>
            chu kỳ
          </Text>
        </View>
        <View style={challengeStyle.verticleLine} />
        <View style={challengeStyle.textViewText}>
          <Text style={challengeStyle.text}>Còn 2 chu kỳ</Text>
          <Text style={challengeStyle.bigText}>để nghỉ dài</Text>
        </View>
      </View>
      <View style={{margin: 5}} />
    </View>
  );
};
export default ChallengeScreen;