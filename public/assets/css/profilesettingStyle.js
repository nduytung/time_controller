import React from 'react';
import {StyleSheet} from 'react-native';

const profilesettingStyle = StyleSheet.create({

    avatar: {
        width: 140,
        height: 140,
        borderRadius: 100,
    },
    avatartouch: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    iconavatar: {
        marginTop: -40,
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    text: {
        alignSelf: 'center',
        fontWeight: "200",
        fontSize: 20,
        color: '#AEB5BC'
    },
    inforContainer: {
        flexDirection: 'row',
        marginTop: 30,
        margin: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    Infor: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
        marginTop: -15,
        fontSize: 15
    },
    touchableSubmit: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    textSubmit: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }
});
export default profilesettingStyle;