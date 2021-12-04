import React from 'react';
import {StyleSheet} from 'react-native';

var ReadyStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede8e5',
    height: '100%',
  },
  viewtext: {
    padding: 15,
    marginTop: 100,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
  },
  image: {
    marginTop: 50,
    marginBottom: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnStart: {
    borderColor: '#4dc2f8',
    borderWidth: 1,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
  },
  btnlayout: {
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReadyStyle;
