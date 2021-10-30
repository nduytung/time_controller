import React from 'react';
import {StyleSheet} from 'react-native';

//nen tai su dung css nhieu lan de do phai viet lai
const globalStyle = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'gray',
  },
  testingDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default globalStyle;
