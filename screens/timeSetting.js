import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import detail from '../public/assets/css/detail';
import TextTicker from 'react-native-text-ticker';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const timeSetting = () => {
  const focusTime = [ "15 phút", "25 phút", "45 phút", "55 phút"]
  const relaxTime = [ "5 phút", "10 phút", "30 phút", "45 phút"]
  const minTime = [ "15 phút", "25 phút", "45 phút", "55 phút"]
  const maxTime = [ "15 phút", "25 phút", "45 phút", "55 phút"]

  return(
      <ScrollView style = {detail.boder}>
        <Text style = {detail.timeTitle}>Cài đặt thời gian</Text>
        <View style={detail.spaceView}>
          <Text style={detail.timeText}>Thời gian tập trung</Text>
          <SelectDropdown data={focusTime} defaultValueByIndex={0} onSelect={(selectedItem, index) => {console.log(selectedItem, index)}}
                          buttonStyle={detail.selectButton}
                          buttonTextStyle={detail.buttonText}
                          dropdownStyle={detail.dropdownStyle}
                          renderDropdownIcon={() => {
                            return(
                              <FontAwesome name="sort-down" size={18}></FontAwesome>
                            );
                          }}
                          dropdownIconPosition={"right"}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}></SelectDropdown>
        </View>
        <View style={detail.spaceView}>
          <Text style={detail.timeText}>Thời gian giải lao</Text>
          <SelectDropdown data={relaxTime} defaultValueByIndex={0} onSelect={(selectedItem, index) => {console.log(selectedItem, index)}}
                          buttonStyle={detail.selectButton}
                          buttonTextStyle={detail.buttonText}
                          dropdownStyle={detail.dropdownStyle}
                          renderDropdownIcon={() => {
                            return(
                              <FontAwesome name="sort-down" size={18}></FontAwesome>
                            );
                          }}
                          dropdownIconPosition={"right"}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}></SelectDropdown>
        </View>
        <View style={detail.spaceView}>
          <Text style={detail.timeText}>Báo thức vào lúc</Text>
          <SelectDropdown data={focusTime} defaultValueByIndex={0} onSelect={(selectedItem, index) => {console.log(selectedItem, index)}}
                          buttonStyle={detail.selectButton}
                          buttonTextStyle={detail.buttonText}
                          dropdownStyle={detail.dropdownStyle}
                          renderDropdownIcon={() => {
                            return(
                              <FontAwesome name="sort-down" size={18}></FontAwesome>
                            );
                          }}
                          dropdownIconPosition={"right"}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}></SelectDropdown>
        </View>
        <View style={detail.spaceView}>
          <Text style={detail.timeText}>Thời gian tối thiểu, tối đa</Text>
          <View style={detail.box}>
            <View style={{width: '50%'}}>
            <SelectDropdown data={minTime} defaultValueByIndex={0} onSelect={(selectedItem, index) => {console.log(selectedItem, index)}}
                          buttonStyle={detail.selectButton}
                          buttonTextStyle={detail.buttonText}
                          dropdownStyle={detail.dropdownStyle}
                          renderDropdownIcon={() => {
                            return(
                              <FontAwesome name="sort-down" size={18}></FontAwesome>
                            );
                          }}
                          dropdownIconPosition={"right"}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}></SelectDropdown>
            </View>
            <View style={{width: '50%'}}>
            <SelectDropdown data={maxTime} defaultValueByIndex={0} onSelect={(selectedItem, index) => {console.log(selectedItem, index)}}
                          buttonStyle={detail.selectButton}
                          buttonTextStyle={detail.buttonText}
                          dropdownStyle={detail.dropdownStyle}
                          renderDropdownIcon={() => {
                            return(
                              <FontAwesome name="sort-down" size={18}></FontAwesome>
                            );
                          }}
                          dropdownIconPosition={"right"}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}></SelectDropdown>
            </View>
            
          </View>
         
        </View>
        <TouchableOpacity style={detail.saveChange}>
          <Text style={detail.textbold}>LƯU THAY ĐỔI</Text>
        </TouchableOpacity>

        <View style={{paddingBottom: 90}}></View>
      </ScrollView>
  )  
}
export default timeSetting;
