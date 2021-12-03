import React from 'react';
import {StyleSheet} from 'react-native';

var ReadyStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DADADA",
    },
    viewtext: {
        padding: 15,
        marginTop: 100,
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        color: 'black'
    },
    image: {
        marginTop: 60,
    },
    btnStart: {
        borderColor:'#4dc2f8',
        borderWidth:1,
        width : '40%',
        alignSelf: 'center',
        marginTop: 50
    },
    btnlayout:{
        width:'100%',
        height:35,
        justifyContent:'center',
        alignItems:'center',
    },
});

export default ReadyStyle;