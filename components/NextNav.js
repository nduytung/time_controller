import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import nextNavCss from '../public/assets/css/nexNav';

const NextNav = ({next, prev, cur}) => {
  return (
    <View style={nextNavCss.view}>
      <Entypo name="chevron-thin-left" size={20} onPress={prev} />
      <FontAwesome name={cur == 1 ? 'circle' : 'circle-thin'} size={20} />
      <FontAwesome name={cur == 2 ? 'circle' : 'circle-thin'} size={20} />
      <FontAwesome name={cur == 3 ? 'circle' : 'circle-thin'} size={20} />
      <Entypo name="chevron-thin-right" size={20} onPress={next} />
    </View>
  );
};

export default NextNav;
