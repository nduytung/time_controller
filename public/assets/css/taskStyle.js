import React from 'react';
import {StyleSheet} from 'react-native';

const taskStyle = StyleSheet.create({
  headerText: {
    marginTop: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
  },
  box1: {
    marginTop: 20,
    backgroundColor: '#eedecf',
    borderRadius: 15,
    paddingHorizontal: 15,
    width: '100%',
    alignSelf: 'center',
  },
  box2: {
    marginTop: 20,
    backgroundColor: '#259225',
    borderRadius: 15,
    width: '95  %',
    height: 180,
    alignSelf: 'center',
  },
  information: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  leftInformation: {
    width: '30%',
    borderEndWidth: 1,
    justifyContent: 'flex-start',
  },
  rightInformation: {
    flexDirection: 'column',
    width: '65%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  leftInfor1: {
    marginTop: 10,
    fontSize: 15,
    alignSelf: 'flex-start',
  },
  leftInfor2: {
    marginTop: 5,
    alignSelf: 'flex-start',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  leftInfor3: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightInfor1: {
    marginTop: 10,
    marginStart: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightInfor2: {
    marginTop: 5,
    marginStart: 5,
    color: 'white',
    fontSize: 16,
  },
  rightInfor3: {
    marginTop: 10,
    marginStart: 5,
    fontSize: 17,
  },
  touchFix: {
    marginTop: 10,
    marginEnd: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  textFix: {
    fontSize: 20,
    marginStart: 15,
    marginEnd: 15,
  },
});
export default taskStyle;
