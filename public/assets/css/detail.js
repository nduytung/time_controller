import React from 'react';
import {StyleSheet} from 'react-native';

const detail = StyleSheet.create({
  text: {
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  textbold: {
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  title: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  boder: {
    padding: 15,
    backgroundColor: 'white',
    height: '100%',
  },
  box: {
    margin: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    marginVertical: 15,
    marginRight: 20,
    width: 70,
    height: 70,
    alignItems: 'center',
  },
  information: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  mdifyTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignContent: 'center',
    marginBottom: 10,
    height: 35,
  },
  customRating: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  starImg: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  modifyInfor: {
    marginTop: 20,
  },
  modifyText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '200',
    color: 'gray',
    textAlign: 'justify',
    fontFamily: 'Roboto',
  },
  modifyText1: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
  saveChange: {
    marginTop: 30,
    marginBottom: 10,
    height: 40,
    width: '90%',
    backgroundColor: '#3C88B5',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  spaceView: {
    marginTop: 10,
    width: '100%',
  },
  selectButton: {
    marginTop: 15,
    width: '90%',
    borderRadius: 20,
    borderColor: '#444',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
  },
  dropdownStyle: {
    borderRadius: 20,
  },
  timeTitle: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  timeText: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Roboto',
    marginLeft: 5,
  },
});

export default detail;
