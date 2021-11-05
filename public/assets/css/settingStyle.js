import React from 'react';
import {StyleSheet} from 'react-native';

var settingStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingBottom: 90
    },
    screenname: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    settingelements: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
    },
    settingtext: {
        fontSize: 18,
        marginLeft: 5,  
    },
    icon: {
        marginTop: -5,
    },
    nexticon: {
        marginTop: 2,
        marginLeft: 'auto'
    },
    profileSetting:{
        flexDirection:'row',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
    },
    profileText: {
        marginLeft: 20,
        justifyContent:'center'
    },
    profileName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    profilePhone: {
        marginTop: 5,
        fontSize: 15
    },
    profileNexticon:{
        marginLeft: 'auto',
    },
})

export default settingStyle;