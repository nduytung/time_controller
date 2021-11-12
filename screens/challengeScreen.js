import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.progressView}>
        <AnimatedCircularProgress
          size={300}
          width={20}
          fill={90}
          tintColor="#FECB1C"
          backgroundColor="#FFFFFF"
          rotation={-360}>
          {fill => <Text style={styles.bigText}>5 Phút nghỉ</Text>}
        </AnimatedCircularProgress>
      </View>
      <View style={styles.tagView}>
        <View style={{margin: 5}}>
          <Text style={styles.text}>5 minute challenge</Text>
        </View>
        <View style={styles.HoriLine} />
        <View style={styles.rowView}>
          <View style={{flex: 1}}>
            <Image
              tyle={styles.img}
              source={require('./image9.png')}
              resizeMode="center"
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.bigText}>chống đẩy</Text>
            <Text style={styles.text}>x5</Text>
          </View>
        </View>
      </View>

      <View style={styles.textView}>
        <View style={styles.textViewText}>
          <Text style={styles.text}>Bạn đã hoàn thành</Text>
          <Text style={styles.text}>
            <Text style={styles.bigText}>2 </Text>
            chu kỳ
          </Text>
        </View>
        <View style={styles.verticleLine} />
        <View style={styles.textViewText}>
          <Text style={styles.text}>Còn 2 chu kỳ</Text>
          <Text style={styles.bigText}>để nghỉ dài</Text>
        </View>
      </View>
      <View style={{margin: 5}} />
    </View>
  );
};
export default ChallengeScreen;