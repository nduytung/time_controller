import React from 'react';
import {StyleSheet} from 'react-native';


var AlarmStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 10
    },
    alarmsetting: {
        flex: 0.5,
        backgroundColor: "#F9FFB7",
        borderRadius: 20,
        marginTop: 30,
        padding: 15,
    },
    texttille: {
        fontSize: 23,
        color: 'black'
    },
    text: {
        fontSize: 16,
        marginTop: 15,
        color: 'black'
    },
    buttonview: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 'auto'
    },
    button: {
        borderColor:'#F9FFB7',
        width : '45%',
    },
    btnlayout:{
        width:'100%',
        height:35,
        justifyContent:'center',
        alignItems:'center',
    },
    
    dropdown1BtnStyle: {
        width: "100%",
        backgroundColor: "#FFF",
        borderRadius: 20,
        borderColor: "#444",
        marginBottom: 15
    },
    dropdown1BtnTxtStyle: { 
        color: "black", 
        textAlign: "left",
        fontSize: 18
    },
    dropdown1DropdownStyle: { 
        backgroundColor: "#FFEFEF",
        borderRadius: 20
    },
    dropdown1RowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
        borderRadius: 20
    },
    dropdown1RowTxtStyle: { 
        color: "#444", 
        textAlign: "left" 
    },
    minmax: {
        fontSize: 16,
        color: 'black'
    },
});

export default AlarmStyle;