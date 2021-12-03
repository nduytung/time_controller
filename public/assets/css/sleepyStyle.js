import React from 'react';
import {StyleSheet} from 'react-native';

const sleepyStyle = StyleSheet.create({
  backgroundFont: {
    backgroundColor: '#385277',
  },
  imageF: {
    marginVertical: 30,
    width: '100%',
    height: 300,
    alignSelf: 'center',
    borderRadius: 20,
  },
  helloText: {
    marginTop: 20,
    margin: 10,
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  text: {
    margin: 10,
    color: 'white',
    fontSize: 17,
  },
  textInput: {
    backgroundColor: 'white',
    marginVertical: 10,
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: '700',
    width: '30%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  time: {
    margin: 10,
    flexDirection: 'row',
  },
  timeLeft: {
    textAlign: 'center',
    marginTop: 10,
    flex: 1,
    alignSelf: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
  },
  text2: {
    fontSize: 40,
    color: '#FF69B4',
    fontWeight: '700',
  },
  timeRight: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    flex: 1,
  },
  textTime: {
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    fontSize: 18,
    fontWeight: '700',
    borderTopColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
  },
  textBaothuc: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    alignSelf: 'center',
    color: '#ffff00',
  },
  touch: {
    alignItems: 'center',
  },
});

export default sleepyStyle;
