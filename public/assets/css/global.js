import React from 'react';
import {StyleSheet} from 'react-native';

//nen tai su dung css nhieu lan de do phai viet lai
const globalStyle = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'gray',
    fontWeight: 'bold'
  },
  testingDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1
  },
  imageJob: {
    margin: 10,
    alignItems: 'center',
    height:60,
    width: 60,
    borderRadius: 2
  },
  infor: {
    flexDirection: 'column',
  },
  textTime: {
    marginTop: 10,
    marginStart: 10,
    marginBottom: 5,
    fontSize: 15
  },
  textWork: {
    marginBottom: 10,
    marginStart: 10,
    marginTop: 5,
    fontSize: 20, 
    fontWeight: 'bold'
  }
});

export default globalStyle;
