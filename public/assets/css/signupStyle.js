import React from 'react';
import {StyleSheet} from 'react-native';

var signupStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9c73e9',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
    height: 100,
  },
  footer: {
    flex: 3,
    backgroundColor: '#ebeef2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
  },
  scrollview: {
    paddingHorizontal: 20,
  },
  screename: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#815fde',
    marginTop: 2,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 13,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 13,
  },
  usericon: {
    marginTop: 17,
  },
  usercheckicon: {
    marginTop: 17,
  },
  lockicon: {
    marginTop: 17,
  },
  passeyeicon: {
    marginTop: 17,
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
  },
  SignIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  TextSignIn: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default signupStyle;
