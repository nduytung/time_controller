import React from "react";
import {StyleSheet} from 'react-native';

const sleepyStyle = StyleSheet.create({
    backgroundFont: {
        backgroundColor: '#03178C'
    },
    imageF: {
        margin: 10,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20
    },
    helloText: {
        marginTop: 20,
        margin: 10,
        color: 'white',
        fontSize: 22
    },
    text: {
        margin: 10,
        color: 'white',
        fontSize: 17
    },
    textInput: {
        backgroundColor: 'white',
        margin: 10,
        width: '90%',
        borderRadius: 15,
        alignSelf: 'center'
    },
    time: {
        margin: 10,
        flexDirection: 'row'
    },
    timeLeft: {
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 15,
        width: '45%',
        alignSelf: 'center'
    },
    text1: {
        color: 'white',
        fontSize: 20
    },
    text2: {
        fontSize: 35,
        color: '#FF69B4'
    },
    timeRight: {
        alignSelf: 'center',
        textAlign: 'center',
        width: '55%',
        height: 100,
        marginTop: 10,
        marginRight: 15,
        backgroundColor: '#2551DD'
    },
    textTime: {
        textAlign: 'center',
        marginTop: 7,
        color: 'white',
        fontSize: 20,
        borderTopWidth: 1,
        borderTopColor: 'white'
    },
    textBaothuc: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        alignSelf: 'center',
        color: '#ffff00'
    },
    touch: {
        alignItems: 'center',
    }

})

export default sleepyStyle;