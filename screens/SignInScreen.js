import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from 'react-native-animatable';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
       email:'',
       password:'',
       check_textInputChange: false,
       secureTextEntry: true
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

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <Animatable.View
            animation="fadeInUpBig"
            style={styles.footer}>
                <Text style={{fontSize:25, color:'#0d0c0d', textAlign:'center',marginBottom:30, fontWeight:'bold'}}>Sign In</Text>
                <Text style={styles.text_footer}>Email Address</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
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
                        size={20}
                        style={styles.usercheckicon}
                    />
                    :null}
                </View>
                <Text style={[styles.text_footer,{marginTop:10}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                        style={styles.passicon}
                    />
                    <TextInput
                        style={{color:'white'}}
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
                            size={20}
                            style={styles.passeyeicon}
                        />
                        :
                        <Feather
                            name="eye"
                            color="gray"
                            size={20}
                            style={styles.passeyeicon}
                        />
                        }       
                    </TouchableOpacity>
                </View>
                <Text style={{color:'#009bd1', marginTop:0, textAlign: 'right'}}>Forgot Password</Text>
                <View style={styles.button}>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("TabsScreen")}
                    style={[styles.SignIn,{
                        borderColor:'#4dc2f8',
                        borderWidth:1,
                        marginTop:-30
                    }]}>
                        <LinearGradient
                            colors={['#5db8fe', '#39cff2']}
                            style={styles.SignIn}>
                                <Text style={[styles.textSign,{color:'white'}]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={styles.TextSignUp}>
                        <Text>I'm a new user, </Text>
                        <Text onPress={() => navigation.navigate('SignUpScreen')}
                        style={{color: '#009bd1'}}>Sign Up</Text>
                    </View>
                    <View style={{marginTop: 30, fontSize: 18}}>
                        <Text>Sign In With</Text>
                        <View style={styles.OtherSignIn}>
                            <Entypo
                                onPress={() => navigation.navigate('SignUpScreen')}
                                name = "facebook-with-circle"
                                color="blue"
                                size={30}
                                style={styles.facebookicon}
                            />
                            <Entypo
                                name = "mail-with-circle"
                                color="red"
                                size={30}
                                style={styles.mailicon}
                            />
                        </View>
                    </View>
                    
                </View>
            </Animatable.View>
        </View>
    )
    
}

export default SignInScreen;

var styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'  
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:2,
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
        fontSize:12
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
        borderRadius:20,
        color: ' white',
        
    },
    textInput:{
        flex:1,
        paddingLeft:10,
        color:'#05375a',
        
    },
    usericon:{
        marginTop:10
    },
    usercheckicon:{
        marginTop:10
    },
    passicon:{
        marginTop:10
    },
    passeyeicon:{
        marginTop:10
    },
    button:{
        alignItems:'center',
        marginTop:50
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
    TextSignUp:{
        flexDirection: 'row',
        marginTop: 10,
    },
    OtherSignIn: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookicon: {
        marginTop: 5,
    },
    mailicon: {
        marginTop: 5,
        marginLeft: 10,
        
    },
});