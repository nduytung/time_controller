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

const personalManager = () => {
  
  return(
      <View style={personalUI.fullScreen}>
        <View style={personalUI.top}>
          <View style={personalUI.viewTop}>
            <TouchableOpacity >
              <Text style={personalUI.topButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={personalUI.topButtonCenter}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={personalUI.topButton}>Done</Text>
            </TouchableOpacity>
          </View>
          <Image style={personalUI.img} source={require('../public/assets/image/avatar.jpg')}></Image>
        </View>
        
        
        <ScrollView style={personalUI.bottom}>
          <Text style={personalUI.title2}>Basic Information</Text>
          <View style={personalUI.viewBottom}>
            <Text style={personalUI.information}>Name</Text>
            <View style={personalUI.detailInfor}>
              <Text style={personalUI.textDetailInfor}>Goukai </Text>
              <FontAwesome name="forward" size={20}></FontAwesome>
            </View>
          </View>
          <View style={personalUI.viewBottom}>
            <Text style={personalUI.information}>Gender</Text>
            <View style={personalUI.detailInfor}>
              <Text style={personalUI.textDetailInfor}>Male </Text>
              <FontAwesome name="forward" size={20}></FontAwesome>
            </View>
          </View>
          <View style={personalUI.viewBottom}>
            <Text style={personalUI.information}>Location</Text>
            <View style={personalUI.detailInfor}>
              <Text style={personalUI.textDetailInfor}>Wuhan </Text>
              <FontAwesome name="forward" size={20}></FontAwesome>
            </View>
          </View>
          <View style={personalUI.viewBottom}>
            <Text style={personalUI.information}>Email</Text>
            <View style={personalUI.detailInfor}>
              <Text style={personalUI.textDetailInfor}>duytung@gmail.com </Text>
              <FontAwesome name="forward" size={20}></FontAwesome>
            </View>
          </View>
          <View style={personalUI.viewBottom}>
            <Text style={personalUI.information}>About</Text>
            <View style={personalUI.detailInfor}>
              <Text style={personalUI.textDetailInfor}>DevOps </Text>
              <FontAwesome name="forward" size={20}></FontAwesome>
            </View>
          </View>

          <Text style={personalUI.title2}>Education</Text>
          <View style={personalUI.viewBottom}>
            <Text style={personalUI.information}>University</Text>
            <View style={personalUI.detailInfor}>
              <Text style={personalUI.textDetailInfor}>UIT </Text>
              <FontAwesome name="forward" size={20}></FontAwesome>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingBottom: 90}}></View>
      </View>
  )
  
}
export default personalManager;
