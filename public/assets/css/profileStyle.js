import React from 'react';
import {StyleSheet} from 'react-native';

const profileStyle = StyleSheet.create({
  screen: {
    borderRadius: 50,
    margin: 10,
  },
  headpage: {
    padding: 10,
    width: '100%',
    height: 150,
    backgroundColor: '#A7C7E7',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tailpage: {
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: -90,
  },
  inforContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontWeight: '200',
    fontSize: 25,
    color: 'white',
  },
  name: {
    fontSize: 25,
    color: 'blue',
  },
  statusContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  statusBox: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  imageView: {
    width: 120,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  imageShow: {
    marginTop: 20,
    height: 200,
  },
  information: {
    alignSelf: 'center',
    margin: 10,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },
  subtext: {
    marginLeft: 10,
  },
});

export default profileStyle;
