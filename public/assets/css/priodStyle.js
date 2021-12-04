import React from 'react';
import {StyleSheet} from 'react-native';

const priodStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  pressable: {
    width: 50,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF51A3',
  },

  progressView: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  text: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#000000',
    textAlign: 'left',
  },
  bigText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: '900',
    color: '#000000',
  },
  img: {
    width: 100,
    height: 100,
    margin: 3,
  },
  imgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textViewText: {
    flex: 1,
    margin: 1,
    padding: 15,
  },
  verticleLine: {
    height: '100%',
    width: 2,
    backgroundColor: '#000000',
    margin: 5,
  },
});

export default priodStyle;
