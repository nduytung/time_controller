import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import nextNavCss from '../public/assets/css/nexNav';

const NextNav = ({next, prev}) => {
  return (
    <View style={nextNavCss.view}>
      <FontAwesome name="long-arrow-left" size={20} onPress={prev} />
      <FontAwesome name="dot-circle-o" size={20} />
      <FontAwesome name="dot-circle-o" size={20} />
      <FontAwesome name="dot-circle-o" size={20} />
      <FontAwesome name="long-arrow-right" size={20} onPress={next} />
    </View>
  );
};

export default NextNav;
