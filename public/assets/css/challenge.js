import React from 'react';
import {StyleSheet} from 'react-native';

//nen tai su dung css nhieu lan de do phai viet lai
const challengeStyle = StyleSheet.create({
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
    fontSize: 16,
    fontFamily: 'Roboto',
    color: 'gray',
    textAlign: 'left',
  },
  bigText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'white',
  },
  extentText: {
    fontSize: 25,
    fontFamily: 'Roboto',
    margin: 5,
    fontWeight: 'bold',
    color: '#000000',
  },
  img: {
    width: 150,
    height: 150,
    margin: 3,
  },
  tagView: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#A6E2FF',
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
  HoriLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#000000',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default challengeStyle;
