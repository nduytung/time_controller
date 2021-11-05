import React from 'react';
import {StyleSheet} from 'react-native';

var rankStyles= StyleSheet.create({
    RankScreencontainer:{
        flex:1,
        backgroundColor: '#8ebeed'
    },
    tittle: {
        marginTop: 30,
        marginLeft: 15,
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'black',
    },
    RankScreenHeader:{
        flex:1,
        backgroundColor: '#8ebeed',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    RankScreenfooter: {
        flex: 1.5,
        backgroundColor: '#ffffff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    rank1Column: {
        backgroundColor: '#FF7A7A',
        width: 100,
        height: 100,
        marginTop: 'auto',
    },
    rank2Column: {
        backgroundColor: '#FEDE71',
        width: 100,
        height: 70,
        marginTop: 'auto',
    },
    rank3Column: {
        backgroundColor: '#64FFA2',
        width: 100,
        height: 50,
        marginTop: 'auto',
    },
    rankName:{
        fontSize: 16,
        marginTop: 20, 
        marginLeft: 15,
        color: 'black',
    },
    rankCheckProfile: {
        fontSize: 12,
        marginLeft: 15,
        color:'#72daf7'
    },
    rankNumber: {
        marginLeft: 15, 
        marginTop: 25, 
        fontSize:16,
        fontWeight: 'bold',
        color: '#000000'
    },
    rankPoint: {
        marginTop: 25, 
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0aa0f7'
    },
});

export default rankStyles;