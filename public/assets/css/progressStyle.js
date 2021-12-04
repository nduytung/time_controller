import React from 'react';
import {StyleSheet} from 'react-native';
const progressStyle = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
  },

  sec1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },

  sec2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFDC65',
    borderRadius: 15,
    padding: 15,
    paddingRight: 50,
    overflow: 'hidden',
  },
  sec2Progress: {
    flex: 1,
    width: '100%',
  },

  mainbutton: {
    width: '100%',
    textAlign: 'center',
    borderRadius: 100,
    borderColor: '#31BAFD',
    padding: 13,
    borderWidth: 2,
    marginVertical: 20,
  },

  pressable: {
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
  },

  scroll: {
    width: '100%',
    height: '100%',
  },
  scrollview: {
    width: 280,
    backgroundColor: '#eedecf',
    padding: 15,
    overflow: 'hidden',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: 'gray',
    textAlign: 'left',
    fontWeight: '200',
  },
  hello: {
    fontWeight: '700',
    fontSize: 42,
  },
  textImpress: {
    fontSize: 50,
    fontFamily: 'Roboto',
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'left',
  },
  mainButtonText: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    color: '#31BAFD',
    textAlign: 'center',
  },
  textInButton: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    color: 'gray',
    textAlign: 'center',
  },
  bigText: {
    fontSize: 25,
    marginVertical: 5,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#000000',
  },
  extentText: {
    fontSize: 22,
    margin: 5,
    fontWeight: '700',
    color: '#000000',
    marginTop: 25,
  },
  img: {
    width: 60,
    height: 60,
  },
});
export default progressStyle;
