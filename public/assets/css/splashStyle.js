import React from 'react';
import {StyleSheet} from 'react-native';

var splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: '100%',
  },
  footer: {
    flex: 1.5,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    marginTop: 60,
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    color: 'gray',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 50,
  },
  SignIn: {
    width: '90%',
    borderColor: '#815fde',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default splashStyle;
