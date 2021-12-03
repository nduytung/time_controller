import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
const CustomButton = ({title = 'OK', callback}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 7,
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginVertical: 15,
      }}
      onPress={() => callback()}>
      <Text style={{color: 'gray', fontSize: 16, textAlign: 'center'}}>
        {' '}
        {title}{' '}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
