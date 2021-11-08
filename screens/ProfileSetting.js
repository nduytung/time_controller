import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import profilesettingStyle from '../public/assets/css/profilesettingStyle';
import { TextInput } from 'react-native-gesture-handler';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'

const ProfileSetting = () => {
    return(
        <ScrollView style={{margin: 15}}>
            <View style={{marginTop: 20}}>
                    <TouchableOpacity onPress={() => {}} style={profilesettingStyle.avatartouch}>
                        <Image style={profilesettingStyle.avatar} source={require('../public/assets/image/duck.gif')}></Image>
                        <IconFontAwesome name='camera' size={30} color='#ffff'
                        style={profilesettingStyle.iconavatar}>
                    </IconFontAwesome>
                    </TouchableOpacity>      
            </View>
            <View style={{marginTop: 10}}>
                <Text style={profilesettingStyle.text}>Hau Dang</Text>
            </View>
            
            <View style={profilesettingStyle.inforContainer}>
                        <IconFontAwesome name='user-o' size={20} />
                        <TextInput placeholder="Your name"
                            autoCorrect={false}
                            style={profilesettingStyle.Infor}>
                        </TextInput>
            </View>
            <View style={profilesettingStyle.inforContainer}>
                        <IconFontAwesome name='phone' size={20}></IconFontAwesome>
                        <TextInput placeholder="Your phone" 
                            autoCorrect={false} 
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={profilesettingStyle.Infor}>
                        </TextInput>
            </View>
            
            <View style={profilesettingStyle.inforContainer}>
                        <IconFontAwesome name='inbox' size={20}></IconFontAwesome>
                        <TextInput placeholder="Your email" 
                            autoCorrect={false} 
                            keyboardType='email-address'
                            autoCorrect={false}
                            style={profilesettingStyle.Infor}>
                        </TextInput>
            </View>

            <View style={profilesettingStyle.inforContainer}>
                        <IconFontAwesome name='map-marker' size={20}></IconFontAwesome>
                        <TextInput placeholder="Your city" 
                            autoCorrect={false} 
                            autoCorrect={false}
                            style={profilesettingStyle.Infor}>
                        </TextInput>
            </View>
            <TouchableOpacity style={profilesettingStyle.touchableSubmit} onPress={() => {}}>
                <Text style={profilesettingStyle.textSubmit}>Submit</Text>
            </TouchableOpacity>
            <View style={{marginBottom: 100}}></View>

        </ScrollView>
    )
};
export default ProfileSetting;