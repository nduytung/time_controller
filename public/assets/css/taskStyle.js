import React from "react";
import {StyleSheet} from 'react-native';

const taskStyle = StyleSheet.create({
    headerText: {
        marginTop: 10,
        fontSize: 30,
        marginStart: 5  
    },
    box1: {
        marginTop: 20,
        backgroundColor: '#86D8F7',
        borderRadius: 15,
        width: '95%',
        height: 180,
        alignSelf: 'center'
    },
    box2: {
        marginTop: 20,
        backgroundColor: '#259225',
        borderRadius: 15,
        width: '95  %',
        height: 180,
        alignSelf: 'center'
    },
    information: {
        margin: 5,
        flexDirection: 'row',
    },
    leftInformation: {
        flexDirection: 'column',
        width: '35%',
        borderEndWidth: 1,   
        justifyContent: 'center'
    },
    rightInformation: {
        flexDirection: 'column',
        width: '65%',
        margin: 5,
        justifyContent: 'center'
    },
    leftInfor1: {
        marginTop: 10,
        fontSize: 15,
        alignSelf: 'center',
    },
    leftInfor2: {
        marginTop: 5,
        alignSelf: 'center',
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold'
    },
    leftInfor3: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    rightInfor1: {
        marginTop: 10,
        marginStart: 5,
        fontSize: 30,
        fontWeight: 'bold'
    },
    rightInfor2: {
        marginTop: 5,
        marginStart: 5,
        color: 'white',
        fontSize: 20
    },
    rightInfor3: {
        marginTop: 10,
        marginStart: 5,
        fontSize: 17
    },
    touchFix: {
        marginTop: 10,
        marginEnd: 15,
        backgroundColor: 'white',
        borderRadius: 10, 
        alignSelf: 'flex-end'
    },
    textFix: {
        fontSize: 20,
        marginStart: 15,
        marginEnd: 15
    }


});
export default taskStyle;
