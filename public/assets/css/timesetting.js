import React from 'react';
import {StyleSheet} from 'react-native';

const TimeSettingstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    height: '100%',
    marginTop: 15,
  },
  pomodoro: {
    flex: 0.45,
    backgroundColor: '#EEDECF',
    borderRadius: 20,
  },
  rest: {
    flex: 0.45,
    backgroundColor: '#D4C5E2',
    marginTop: 30,
    borderRadius: 20,
  },
  View: {
    padding: 15,
  },
  pomodoroDetail: {
    flexDirection: 'row',
  },
  image1: {
    marginTop: 20,
  },
  restDetail: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image2: {
    marginLeft: 'auto',
    marginTop: 20,
    height: '700%',
    resizeMode: 'stretch',
  },
  stretch: {
    marginTop: 20,
    width: 150,
    resizeMode: 'cover',
  },
  selecttime: {
    marginTop: '10%',
  },
  dropdown1BtnStyle: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#444',
    marginBottom: 15,
  },
  dropdown1BtnTxtStyle: {
    color: 'black',
    textAlign: 'left',
    fontSize: 18,
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#FFEFEF',
    borderRadius: 20,
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
    borderRadius: 20,
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left',
  },

  dropdown2BtnStyle: {
    width: '60%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#444',
  },
});

export default TimeSettingstyles;
