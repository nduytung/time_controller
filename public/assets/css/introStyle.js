import React from 'react';
import {StyleSheet} from 'react-native';

const introStyle = StyleSheet.create({
  imageshow: {
    alignSelf: 'center',
    marginTop: 100,
  },
  textTopic: {
    fontSize: 28,
    fontWeight: '700',
  },
  textDetail: {
    marginTop: 20,
    width: '70%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
  },
  textDetail1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 25,
    flexWrap: 'wrap',
  },
  textDetail2: {
    marginTop: '15%',
    marginLeft: 10,
    fontSize: 20,
    width: '90%',
    flexWrap: 'wrap',
  },
  textDetail3: {
    marginTop: '10%',
    marginLeft: 10,
    width: '70%',
    textAlign: 'justify',
    fontSize: 20,
    flexWrap: 'wrap',
  },
  btnStart: {
    marginTop: '7%',
    alignSelf: 'center',
    width: '25%',
    height: '5%',
    backgroundColor: '#FECB1C',
    borderRadius: 15,
  },
  textStart: {
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: '3%',
  },
});

export default introStyle;
