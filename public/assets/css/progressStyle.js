import React from 'react';
import {StyleSheet} from 'react-native';
const progressStyle = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    sec1: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      margin: 5,
      padding: 3,
    },
    sec1text: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    sec1img: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#FFFFFF',
    },
    sec2: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#FFDC65',
      borderRadius: 10,
      margin: 5,
      padding: 3,
    },
    sec2Progress: {
      flex: 1,
      width: '100%',
    },
    sec2text: {
      flex: 2,
      width: '100%',
      justifyContent: 'center',
      padding: 5,
    },
    pressable: {
      width: '100%',
      textAlign: 'center',
      borderRadius: 20,
      borderColor: '#31BAFD',
      margin: 5,
      padding: 5,
      borderWidth: 2,
    },
  
    progress: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      backgroundColor: '#FFDC65',
    },
    scroll: {
      width: '100%',
      height: '100%',
    },
    scrollview: {
      width: 300,
      height: 160,
      backgroundColor: '#A0CFEF',
      padding: 3,
      borderRadius: 10,
      margin: 3,
    },
    text: {
      fontSize: 20,
      fontFamily: 'Roboto',
      color: '#000000',
      textAlign: 'left',
    },
    textImpress: {
      fontSize: 40,
      fontFamily: 'Roboto',
      fontWeight: '900',
      color: '#FFFFFF',
      textAlign: 'left',
    },
    textInButton: {
      fontSize: 20,
      fontFamily: 'Roboto',
      color: '#31BAFD',
      textAlign: 'center',
    },
    bigText: {
      fontSize: 40,
      fontFamily: 'Roboto',
      fontWeight: '900',
      color: '#000000',
    },
    extentText: {
      fontSize: 25,
      fontFamily: 'Roboto',
      margin: 5,
      fontWeight: 'bold',
      color: '#000000',
    },
    img: {
      width: 10,
      height: 10,
      margin: 10,
    },
  });
  export default progressStyle;