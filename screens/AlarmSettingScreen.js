import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AlarmStyle from '../public/assets/css/alarmstyle';

const AlarmSettingScreen = () => {

    const times = ["2 giờ", "3 giờ", "4 giờ", "5 giờ", "6 giờ", "7 giờ"]
    const mintimes = ["1 giờ", "2 giờ", "3 giờ", "4 giờ"]
    const maxtimes = ["2 giờ", "3 giờ", "4 giờ", "5 giờ", "6 giờ", "7 giờ"]
    return(
        <View style={AlarmStyle.container}>
            <View style={AlarmStyle.alarmsetting}>
                    <Text style={AlarmStyle.texttille}>Bạn muốn đặt báo thức chứ ?</Text>
                    <Text style={AlarmStyle.text}>Không phiền không ăn tiền</Text>
                    
                    <View style={AlarmStyle.buttonview}>
                        <SelectDropdown
                            data={times}
                            onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                            
                            }}
                            defaultButtonText={"Chọn thôi nào"}
                            buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                            return item;
                            }}
                            buttonStyle={AlarmStyle.dropdown1BtnStyle}
                            buttonTextStyle={AlarmStyle.dropdown1BtnTxtStyle}
                            renderDropdownIcon={() => {
                            return (
                                <FontAwesome name="chevron-down" color={"#444"} size={18} />
                            );
                            }}
                            dropdownIconPosition={"right"}
                            dropdownStyle={AlarmStyle.dropdown1DropdownStyle}
                            rowStyle={AlarmStyle.dropdown1RowStyle}
                            rowTextStyle={AlarmStyle.dropdown1RowTxtStyle}
                            />
                        <View style= {{flexDirection: 'row'}}>
                            <TouchableOpacity 
                                style={AlarmStyle.button}>
                                <LinearGradient
                                    colors={['#F9FFB7', '#F9FFB7']}
                                    style={AlarmStyle.btnlayout}>
                                        <Text style={{color:'black', fontSize: 16, fontWeight: 'bold'}}>HỦY</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={AlarmStyle.button}>
                                <LinearGradient
                                    colors={['#5db8fe', '#39cff2']}
                                    style={AlarmStyle.btnlayout}>
                                        <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}>OK</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
            </View>
            <View style={[AlarmStyle.alarmsetting, {backgroundColor: '#EDF2F5'}]}>
                <Text style={AlarmStyle.texttille}>Cam kết</Text>
                <Text style={AlarmStyle.text}>Thời gian tối đa - tối thiểu mà bạn sẽ dành cho công việc mỗi ngày trên app này</Text>
                <View style={AlarmStyle.buttonview}>
                    <Text style={AlarmStyle.minmax}>Tối thiểu:</Text>
                    <SelectDropdown
                        style= {AlarmStyle.timpicker}
                        data={mintimes}
                        onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        }}
                        defaultButtonText={"Chọn thôi nào"}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                        return item;
                        }}
                        buttonStyle={AlarmStyle.dropdown1BtnStyle}
                        buttonTextStyle={AlarmStyle.dropdown1BtnTxtStyle}
                        renderDropdownIcon={() => {
                        return (
                            <FontAwesome name="chevron-down" color={"#444"} size={18} />
                        );
                        }}
                        dropdownIconPosition={"right"}
                        dropdownStyle={AlarmStyle.dropdown1DropdownStyle}
                        rowStyle={AlarmStyle.dropdown1RowStyle}
                        rowTextStyle={AlarmStyle.dropdown1RowTxtStyle}
                        />
                    <Text style={AlarmStyle.minmax}>Tối đa:</Text>
                    <SelectDropdown
                        style= {AlarmStyle.timpicker}
                        data={maxtimes}
                        onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                        }}
                        defaultButtonText={"Chọn thôi nào"}
                        buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                        return item;
                        }}
                        buttonStyle={AlarmStyle.dropdown1BtnStyle}
                        buttonTextStyle={AlarmStyle.dropdown1BtnTxtStyle}
                        renderDropdownIcon={() => {
                        return (
                            <FontAwesome name="chevron-down" color={"#444"} size={18} />
                        );
                        }}
                        dropdownIconPosition={"right"}
                        dropdownStyle={AlarmStyle.dropdown1DropdownStyle}
                        rowStyle={AlarmStyle.dropdown1RowStyle}
                        rowTextStyle={AlarmStyle.dropdown1RowTxtStyle}
                    />
                    <View style= {{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={AlarmStyle.button}>
                            <LinearGradient
                                colors={['#EDF2F5', '#EDF2F5']}
                                style={AlarmStyle.btnlayout}>
                                    <Text style={{color:'black', fontSize: 16, fontWeight: 'bold'}}>HỦY</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={AlarmStyle.button}>
                            <LinearGradient
                                colors={['#5db8fe', '#39cff2']}
                                style={AlarmStyle.btnlayout}>
                                    <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}>OK</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                            
                    </View>
                </View>
            </View>
         </View>
  )
};

export default AlarmSettingScreen;

