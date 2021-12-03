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
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TimeSettingstyles from '../public/assets/css/timesetting';

const TimeSettingScreen = () => {
    const pomodorotimes = ["25 phút", "40 phút", "55 phút"]
    const resttime = ["5 phút", "10 phút", "15 phút"]
    return (
        <View style={TimeSettingstyles.container}>
            <View style = {{flex: 0.1}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: "black"}}>Cài đặt thời gian</Text>
            </View>
            <View style={TimeSettingstyles.pomodoro}>
                <View style ={TimeSettingstyles.View}>
                    <Text style={{fontSize: 25, color: "black"}}>Pomodoro</Text>
                    <View style={TimeSettingstyles.pomodoroDetail}>
                            <Image
                                source={require('../icon/pomodoro.png')}
                                style = {TimeSettingstyles.stretch}
                            />
                            <Text style={{marginTop: 25, width: 150, marginLeft: "auto", fontSize: 15}}>
                                Thời gian "tối đa" mà bạn có thể tập trung mỗi lần. Thời gian này không nên dài quá 45 phút đâu bạn nhé!
                            </Text>
                            
                    </View>
                    <View style ={TimeSettingstyles.selecttime}>
                        <SelectDropdown
                            data={pomodorotimes}
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
                            buttonStyle={TimeSettingstyles.dropdown1BtnStyle}
                            buttonTextStyle={TimeSettingstyles.dropdown1BtnTxtStyle}
                            renderDropdownIcon={() => {
                            return (
                                <FontAwesome name="chevron-down" color={"#444"} size={18} />
                            );
                            }}
                            dropdownIconPosition={"right"}
                            dropdownStyle={TimeSettingstyles.dropdown1DropdownStyle}
                            rowStyle={TimeSettingstyles.dropdown1RowStyle}
                            rowTextStyle={TimeSettingstyles.dropdown1RowTxtStyle}
                        />
                    </View>
                </View>
            </View>
            <View style= {TimeSettingstyles.rest}>
                <View style ={TimeSettingstyles.View}>
                    <Text style={{fontSize: 25, color: "black", marginLeft: "auto"}}>Thời gian nghỉ</Text>
                    <Text style={{fontSize: 16, marginTop: 10}}>Chọn thời gian mà bạn muốn nghỉ sau mỗi chu kì pomodoro. Đừng dài hơn 10 phút nhé!</Text>
                    <View style={TimeSettingstyles.restDetail}>
                        <Image
                            source={require('../icon/rest.png')}
                            style = {TimeSettingstyles.image2}
                            re
                        />
                    </View>
                    <View style ={TimeSettingstyles.selecttime}>
                        <SelectDropdown
                            data={resttime}
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
                            buttonStyle={TimeSettingstyles.dropdown2BtnStyle}
                            buttonTextStyle={TimeSettingstyles.dropdown1BtnTxtStyle}
                            renderDropdownIcon={() => {
                            return (
                                <FontAwesome name="chevron-down" color={"#444"} size={18} />
                            );
                            }}
                            dropdownIconPosition={"right"}
                            dropdownStyle={TimeSettingstyles.dropdown1DropdownStyle}
                            rowStyle={TimeSettingstyles.dropdown1RowStyle}
                            rowTextStyle={TimeSettingstyles.dropdown1RowTxtStyle}
                        />
                </View>           
                </View>
            </View>
        </View>
    )
}

export default TimeSettingScreen;

