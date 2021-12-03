import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
const Button = ({title = 'OK', callback}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 7,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        backgroundColor: '#815fde',
      }}
      onPress={() => callback()}>
      <Text style={{color: 'white', fontSize: 16}}> {title} </Text>
    </TouchableOpacity>
  );
};
export default Button;
