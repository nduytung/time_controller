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
import LinearGradient from "react-native-linear-gradient";

const AddTask2Screen = () => {
    return(
        <View style={addtask2Style.container}>
            <Text style={addtask2Style.tittle}>Thêm task</Text>
            <Text style={addtask2Style.text}>Bắt buộc</Text>
            <View>
                <TextInput
                    placeholder="Thời gian ước lượng (min)"
                    style={addtask2Style.timeInput}
                />
                <Text style={addtask2Style.textques}>Bạn nghĩ việc này quan trọng đến đâu ?</Text>
                <View style={{flexDirection:'row', marginTop: 15}}>
                    <View style={addtask2Style.circleblue}/>
                    <View style={addtask2Style.importantstraight}/>
                    <View style={addtask2Style.circle}/>
                    <View style={addtask2Style.importantstraight}/>
                    <View style={addtask2Style.circle}/>
                    <View style={addtask2Style.importantstraight}/>
                    <View style={addtask2Style.circle}/>
                    <View style={addtask2Style.importantstraight}/>
                    <View style={addtask2Style.circle}/>
                </View>
                <View>
                    <View style={addtask2Style.importantlevel}>
                        <View style={[addtask2Style.circlelevel, {backgroundColor: '#7CC88D'}]}/>
                        <Text style={addtask2Style.textimportant}>1. Không hẳn</Text>
                    </View>
                    <View style={addtask2Style.importantlevel}>
                        <View style={[addtask2Style.circlelevel, {backgroundColor: '#F5E094'}]}/>
                        <Text style={addtask2Style.textimportant}>2. Sẽ ảnh hưởng trong tương lai</Text>
                    </View>
                    <View style={addtask2Style.importantlevel}>
                        <View style={[addtask2Style.circlelevel, {backgroundColor: '#F89045'}]}/>
                        <Text style={addtask2Style.textimportant}>3. Dealine, bài tập tuần</Text>
                    </View>
                    <View style={addtask2Style.importantlevel}>
                        <View style={[addtask2Style.circlelevel, {backgroundColor: '#EB7C7C'}]}/>
                        <Text style={addtask2Style.textimportant}>4. Khá quan trọng và gấp</Text>
                    </View>
                    <View style={addtask2Style.importantlevel}>
                        <View style={[addtask2Style.circlelevel, {backgroundColor: '#E31111'}]}/>
                        <Text style={addtask2Style.textimportant}>5. Không làm là tới công chiện</Text>
                    </View>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 16,color: 'black'}}>Bưóc 2/3</Text>
                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <View style={addtask2Style.circlebluestep}/>
                        <View style={addtask2Style.straight}/>
                        <View style={[addtask2Style.circlebluestep, {marginLeft: 'auto'}]}/>
                        <View style={addtask2Style.straight}/>
                        <View style={[addtask2Style.circlestep, {marginLeft: 'auto'}]}/>
                    </View>
                    <TouchableOpacity 
                    style={[addtask2Style.buttonNext,{
                        borderColor:'#4dc2f8',
                        borderWidth:1,
                        marginTop: 40
                    }]}>
                        <LinearGradient
                            colors={['#5db8fe', '#39cff2']}
                            style={addtask2Style.buttonNext}>
                                <Text style={[addtask2Style.textNext,{color:'white'}]}>Tiếp Tục</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default AddTask2Screen

const addtask2Style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20
    },
    tittle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: '300'
    },
    timeInput: {
        marginTop: 20,
        borderRadius: 20,
        borderWidth:1,
        borderColor: '#31BAFD',
        fontSize: 16
    },
    textques: {
        marginTop: 20,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    circle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#ffffff',
        borderColor: '#31BAFD',
        borderWidth: 1,
        marginLeft: 'auto'
    },
    circleblue: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#31BAFD'
    },
    importantstraight: {
        backgroundColor: '#31BAFD',
        width: Dimensions.get('window').width  / 5,
        height: 8,
        marginTop: 15,
    },
    
    importantlevel:{
        flexDirection: 'row',
        marginTop: 15
    },
    circlelevel: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    textimportant: {
        marginTop: 8,
        marginLeft: 15,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    circlestep:{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        borderColor: '#31BAFD',
        borderWidth: 1,
    },
    circlebluestep: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#31BAFD',
    },
    straight: {
        backgroundColor: '#31BAFD',
        width: Dimensions.get('window').width  / 3,
        height: 10,
        marginTop: 18,
        marginLeft: -1,
    },
    textNext:{
        fontSize:18,
        fontWeight:'bold'
    },
    buttonNext:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
})