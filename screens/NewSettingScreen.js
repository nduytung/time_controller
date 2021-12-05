import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import personalUI from '../public/assets/css/personalUI';
import TextTicker from 'react-native-text-ticker';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Switch } from 'react-native-paper';

const optionScreen = () => {
  const [isSwitchOnFB, setIsSwitchOnFB] = React.useState(false);
  const onToggleSwitchFB = () => setIsSwitchOnFB(!isSwitchOnFB);

  const [isSwitchOnTW, setIsSwitchOnTW] = React.useState(false);
  const onToggleSwitchTW = () => setIsSwitchOnTW(!isSwitchOnTW);

  const [isSwitchOnINS, setIsSwitchOnINS] = React.useState(false);
  const onToggleSwitchINS = () => setIsSwitchOnINS(!isSwitchOnINS);

  const [isSwitchOnGG, setIsSwitchOnGG] = React.useState(false);
  const onToggleSwitchGG = () => setIsSwitchOnGG(!isSwitchOnGG);
  
  return(
      <ScrollView style={personalUI.fullScreen, {margin: 10}}> 
        <View style={personalUI.viewTop}>
          <FontAwesome name="chevron-left" size={25}></FontAwesome>
          <Text style={personalUI.optionTitlie}>Options</Text>
        </View>

        <View>
          <Text style={personalUI.title2}>Accounts</Text>
          <View style={personalUI.viewBottom}>
            <View style={personalUI.optionsInfor}>
              <FontAwesome name="user" size={20}></FontAwesome>
              <Text style={personalUI.textOptionsInfor}>Edit Profile</Text>
            </View>
            <FontAwesome style={personalUI.iconOptionsForward} name="forward" size={20}></FontAwesome>
          </View>

          <View style={personalUI.viewBottom}>
            <View style={personalUI.optionsInfor}>
              <FontAwesome name="key" size={20}></FontAwesome>
              <Text style={personalUI.textOptionsInfor}>Change Password</Text>
            </View>
            <FontAwesome style={personalUI.iconOptionsForward} name="forward" size={20}></FontAwesome>
          </View>
        </View>

        <View>
          <Text style={personalUI.title2}>Setting</Text>
          <View style={personalUI.viewBottom}>
            <View style={personalUI.optionsInfor}>
              <FontAwesome name="flag" size={20}></FontAwesome>
              <Text style={personalUI.textOptionsInfor}>Notices</Text>
            </View>
            <FontAwesome style={personalUI.iconOptionsForward} name="forward" size={20}></FontAwesome>
          </View>

          <View style={personalUI.viewBottom}>
            <View style={personalUI.optionsInfor}>
              <FontAwesome name="language" size={20}></FontAwesome>
              <Text style={personalUI.textOptionsInfor}>Language</Text>
            </View>
            <FontAwesome style={personalUI.iconOptionsForward} name="forward" size={20}></FontAwesome>
          </View>
        </View>
        
        <View>
          <Text style={personalUI.title2}>Connect social accounts</Text>
          <View style={personalUI.viewBottom}>
            <View style={personalUI.optionsInfor}>
              <FontAwesome name="facebook-square" size={20}></FontAwesome>
              <Text style={personalUI.textOptionsInfor}>Facebook</Text>
            </View>
            <Switch value={isSwitchOnFB} onValueChange={onToggleSwitchFB}/>
          </View>

          <View style={personalUI.viewBottom}>
          <View style={personalUI.optionsInfor}>
              <FontAwesome name="twitter-square" size={20}></FontAwesome>
              <Text style={personalUI.textOptionsInfor}>Twitter</Text>
            </View>
            <Switch value={isSwitchOnTW} onValueChange={onToggleSwitchTW}/>
          </View>

          <View style={personalUI.viewBottom}>
            <View style={personalUI.optionsInfor}>
              <FontAwesome name="instagram-square" size={20}></FontAwesome>
              <Text style={personalUI.textOptionsInfor}>Instagram</Text>
            </View>
            <Switch value={isSwitchOnINS} onValueChange={onToggleSwitchINS}/>
          </View>

          <View style={personalUI.viewBottom}>
            <View style={personalUI.optionsInfor}>
              <FontAwesome name="google" size={20}></FontAwesome>
              <Text style={personalUI.textOptionsInfor}>Google</Text>
            </View>
            <Switch value={isSwitchOnGG} onValueChange={onToggleSwitchGG}/>
          </View>
        </View>
        <TouchableOpacity style={personalUI.btnLogOut}>
          <Text style={personalUI.textBtnLogout}>
            Log out current account
          </Text>
        </TouchableOpacity>


      </ScrollView>
  )
  
}
export default optionScreen;
