import React from 'react';
import {StyleSheet} from 'react-native';

const personalUI = StyleSheet.create({
  fullScreen: {
    height: '100%',
    width: '100%',
  },
  top: {
    backgroundColor: '#8BC6FC',
  },
  bottom: {
    height: '65%',
    margin: 10,
    alignContent: 'center',
  },
  viewTop: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topButton: {
    color: '#ffffff',
    margin: 10,
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  topButtonCenter: {
    color: '#ffffff',
    margin: 10,
    fontSize: 19,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  img: {
    marginVertical: 50,
    width: 150,
    height: 150,
    borderRadius: 150,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title2: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#8bc6fc',
  },
  viewBottom: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  information: {
    fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'left',
    paddingVertical: 10,
    fontWeight: '300',
  },
  detailInfor: {
    flexDirection: 'row',
    textAlign: 'right',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  textDetailInfor: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '100',
    color: 'gray',
    marginEnd: 15,
  },
  optionTitlie: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Roboto',
    flex: 1,
  },

  optionsInfor: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOptionsInfor: {
    marginLeft: 15,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  iconOptionsForward: {
    marginLeft: 20,
    textAlign: 'right',
    alignContent: 'flex-end',
    marginEnd: 10,
  },
  btnLogOut: {
    margin: 20,
    alignSelf: 'center',
  },
  textBtnLogout: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: '#ff0000',
  },
});

export default personalUI;
