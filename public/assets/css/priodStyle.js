import React from 'react';
import {StyleSheet} from 'react-native';

const priodStyle = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  pressable: {
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FECB1C',
  },

  progressView: {
    flex: 2,
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
    alignItems: 'center',
  },
  textViewText: {
    flex: 1,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  verticleLine: {
    width: 2,
    height: 100,
    backgroundColor: 'gray',
    margin: 5,
  },
});

export default priodStyle;
