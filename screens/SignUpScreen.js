import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';

const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
       email:'',
       password:'',
       confirm_password:'',
       check_textInputChange: false,
       secureTextEntry: true,
       confirm_secureTextEntry: true
    });

    const textInPutChange = (val) => {
        if(val.length!==0){
            setData({
                ... data,
                email: val,
                check_textInputChange: true
            });
        }
        else{
            setData({
                ... data,
                email: val,
                check_textInputChange: false 
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!!</Text>
            </View>
            <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, marginTop: -10}}>Create Account</Text>
                <Text style={[styles.text_footer, {marginTop: 10}]}>Fullname</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={13}
                        style={styles.usericon}
                    />
                    <TextInput
                        placeholder="Your fullname..."
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                </View>
                <Text style={[styles.text_footer, {marginTop: 10}]}>Email address</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={13}
                        style={styles.usericon}
                    />
                    <TextInput
                        placeholder="Your email..."
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInPutChange(val)}
                    />
                    {data.check_textInputChange ?
                    <Feather
                        name="check-circle"
                        color="green"
                        size={13}
                        style={styles.usercheckicon}
                    />
                    :null}
                </View>
                <Text style={[styles.text_footer,{marginTop:10}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={13}
                        style={styles.lockicon}
                    />
                    <TextInput
                        placeholder="Your password..."
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="gray"
                            size={13}
                            style={styles.passeyeicon}
                        />
                        :
                        <Feather
                            name="eye"
                            color="gray"
                            size={13}
                            style={styles.passeyeicon}
                        />
                        }       
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text_footer,{marginTop:10}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={13}
                        style={styles.lockicon}
                    />
                    <TextInput
                        placeholder="Confirm Your password..."
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {data.confirm_secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="gray"
                            size={13}
                            style={styles.passeyeicon}
                        />
                        :
                        <Feather
                            name="eye"
                            color="gray"
                            size={13}
                            style={styles.passeyeicon}
                        />
                        }       
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity 
                    style={[styles.SignIn,{
                        borderColor:'#4dc2f8',
                        borderWidth:1,
                        marginTop:-30
                    }]}>
                        <LinearGradient
                            colors={['#5db8fe', '#39cff2']}
                            style={styles.SignIn}>
                                <Text style={[styles.textSign,{color:'white'}]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={styles.TextSignIn}>
                        <Text>I'm already a member, </Text>
                        <Text onPress={() => navigation.navigate('SignInScreen')}
                        style={{color: '#009bd1'}}>Sign In</Text>
                    </View>
                </View>
            </Animatable.View>
        </View>
    )
    
}

export default SignUpScreen;

var styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#05375a'  
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:3,
        backgroundColor:'#ebeef2',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:13
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        color:'#05375a',
        fontSize: 13,
    },
    usericon:{
        marginTop:17
    },
    usercheckicon:{
        marginTop:17
    },
    lockicon:{
        marginTop:17
    },
    passeyeicon:{
        marginTop:17
    },
    button:{
        alignItems:'center',
        marginTop:40
    },
    SignIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
    },
    TextSignIn:{
        flexDirection: 'row',
        marginTop: 5,
    },
});