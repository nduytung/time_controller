import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const SplashScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.header}>
                
            </View>
            <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig">
                <Text style={styles.title}>Best way to control your time</Text>
                <View style={styles.button}>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("SignInScreen")}
                        style={[styles.SignIn,{
                            borderColor:'#4dc2f8',
                            borderWidth:1,
                        }]}>
                            <LinearGradient
                                colors={['#5db8fe', '#39cff2']}
                                style={styles.SignIn}>
                                    <Text style={[styles.textSign,{color:'white'}]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("SignUpScreen")}
                        style={[styles.SignIn,{
                            borderColor:'black',
                            borderWidth:1,
                            marginTop: 20
                        }]}>
                        <Text style={[styles.textSign,{color:'black'}]}>Sign Up</Text>
                            
                        </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen;

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
    },
    header: {
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    footer: {
        flex:1.5,
        backgroundColor:'white',
        paddingVertical:50,
        paddingHorizontal:30
    },
    title:{
        color: '#05375a',
        fontWeight: 'bold',
        fontSize:20,
        justifyContent: 'center',
        textAlign:'center'
    },
    text:{
        color: 'gray',
        marginTop: 5
    },
    button: {
        alignItems:'flex-end',
        marginTop:50,

    },
    SignIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
    },
})