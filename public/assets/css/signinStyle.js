import React from 'react';
import {StyleSheet} from 'react-native';

var signinStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenname: {
    fontSize: 25,
    color: '#815fde',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 2,
    backgroundColor: '#ebeef2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 12,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    borderRadius: 20,
    color: ' white',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  usericon: {
    marginTop: 10,
  },
  usercheckicon: {
    marginTop: 10,
  },
  passicon: {
    marginTop: 10,
  },
  passeyeicon: {
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    marginTop: 100,
  },
  SignIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#815fde',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  TextSignUp: {
    flexDirection: 'row',
    marginTop: 10,
  },
  OtherSignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookicon: {
    marginTop: 5,
  },
  mailicon: {
    marginTop: 5,
    marginLeft: 10,
  },
});

export default signinStyle;
