import React from "react";
import { StyleSheet } from "react-native";

const personalUI = StyleSheet.create({
    fullScreen: {
        height: '100%',
        width: '100%'
    },
    top: {
        height: '35%',
        backgroundColor: '#8BC6FC'
    },
    bottom: {
        height: '65%',
        margin: 10,
        alignContent: 'center'
    },
    viewTop: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topButton: {
        color: '#ffffff',
        margin: 10,
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    topButtonCenter: {
        color: '#ffffff',
        margin: 10,
        fontSize: 19,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    img: {
        marginTop: 10,
        width: '40%',
        height: '60%',
        borderRadius: 70,
        alignSelf: "center",
        alignItems: 'center'       
    },
    title2: {
        marginLeft: 10,
        marginTop: 15,
        fontSize: 17,
        fontFamily: 'Roboto',
        color: '#8bc6fc',
        fontWeight: 'bold'
    },
    viewBottom: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    information: {
        fontSize: 20,
        fontFamily: 'Roboto',
        textAlign: 'left',
        fontWeight: "900"
    },
    detailInfor: {
        flexDirection: 'row',
        textAlign: 'right',
        alignContent: 'flex-end',
    },
    textDetailInfor: {
        fontSize: 17,
        fontFamily: 'Roboto',
        fontWeight: "100",
        marginEnd: 15
    },
    optionTitlie: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Roboto',
        flex: 1
    },



    optionsInfor: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOptionsInfor: {
        marginLeft: 15,
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: "500"
    },
    iconOptionsForward: {
        marginLeft: 20,
        textAlign:'right',
        alignContent: 'flex-end',
        marginEnd: 10
    },
    btnLogOut: {
        margin: 20,
        alignSelf: 'center'
    },
    textBtnLogout: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: '#ff0000'
    }
})

export default personalUI;