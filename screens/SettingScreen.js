import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Scro,
  Image,
} from "react-native";
import {
    Avatar
} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SettingScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <ScrollView>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.screenname}>Settings</Text>
                </View>
                <View style={styles.profileSetting}>
                    <Avatar.Image
                        source={require('../public/assets/image/duck.gif')}
                        size={100}
                    />
                    <View style={styles.profileText}>
                        <Text style={styles.profileName}>Quach Tuan Anh</Text>
                        <Text style={styles.profilePhone}>0899322092</Text>
                        
                    </View>
                    <View style={{marginLeft:'auto', justifyContent:'center'}}>
                        <MaterialIcons
                                name = "navigate-next"
                                color= "grey"
                                size={25}
                                onPress={() => navigation.navigate('ProfileScreen')}
                                style={styles.profileNexticon}
                        />
                    </View>
                </View> 
                <View style={{marginTop:20}}>
                    <View style={styles.settingelements}>
                        <Ionicons
                            name = "notifications-circle"
                            color= "#f75348"
                            size={35}
                            style={styles.icon}
                        />
                        <Text style={styles.settingtext}>
                            Notifications
                        </Text>
                        <MaterialIcons
                            name = "navigate-next"
                            color= "grey"
                            size={25}
                            style={styles.nexticon}
                        />
                    </View>
                    <View style={styles.settingelements}>
                        <Ionicons
                            name = "ios-cloud-circle"
                            color= "#f5f12c"
                            size={35}
                            style={styles.icon}
                        />
                        <Text style={styles.settingtext}>
                            Privacy
                        </Text>
                        <MaterialIcons
                            name = "navigate-next"
                            color= "grey"
                            size={25}
                            style={styles.nexticon}
                        />
                    </View>
                    <View style={styles.settingelements}>
                        <Ionicons
                            name = "md-checkmark-done-circle-sharp"
                            color= "#18d5f2"
                            size={35}
                            style={styles.icon}
                        />
                        <Text style={styles.settingtext}>
                            Security
                        </Text>
                        <MaterialIcons
                            name = "navigate-next"
                            color= "grey"
                            size={25}
                            style={styles.nexticon}
                        />
                    </View>
                </View>
                <View style ={{marginTop: 20}}>
                    <View style={styles.settingelements}>
                        <Ionicons
                            name = "md-heart-circle-sharp"
                            color= "#d857f2"
                            size={35}
                            style={styles.icon}
                        />
                        <Text style={styles.settingtext}>
                            Main
                        </Text>
                        <MaterialIcons
                            name = "navigate-next"
                            color= "grey"
                            size={25}
                            style={styles.nexticon}
                        />
                    </View>
                    <View style={styles.settingelements}>
                        <Ionicons
                            name = "md-navigate-circle"
                            color= "blue"
                            size={35}
                            style={styles.icon}
                        />
                        <Text style={styles.settingtext}>
                            Appearance
                        </Text>
                        <MaterialIcons
                            name = "navigate-next"
                            color= "grey"
                            size={25}
                            style={styles.nexticon}
                        />
                    </View>
                    <View style={styles.settingelements}>
                        <Ionicons
                            name = "ios-list-circle"
                            color= "#3af20c"
                            size={35}
                            style={styles.icon}
                        />
                        <Text style={styles.settingtext}>
                            Language
                        </Text>
                        <MaterialIcons
                            name = "navigate-next"
                            color= "grey"
                            size={25}
                            style={styles.nexticon}
                        />
                    </View>
                </View>
                <View style ={{marginTop: 20}}>
                    <View style={styles.settingelements}>
                        <Ionicons
                            name = "help-circle"
                            color= "#f0a259"
                            size={35}
                            style={styles.icon}
                        />
                        <Text style={styles.settingtext}>
                            Ask a Question
                        </Text>
                        <MaterialIcons
                            name = "navigate-next"
                            color= "grey"
                            size={25}
                            style={styles.nexticon}
                        />
                    </View>
                    <View style={styles.settingelements}>
                        <Ionicons
                            name = "ios-information-circle"
                            color= "#9a09ed"
                            size={35}
                            style={styles.icon}
                        />
                        <Text style={styles.settingtext}>
                            FAQ
                        </Text>
                        <MaterialIcons
                            name = "navigate-next"
                            color= "grey"
                            size={25}
                            style={styles.nexticon}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
};

export default SettingScreen

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingBottom: 90
    },
    screenname: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    settingelements: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 10,
        marginRight: 30,
    },
    settingtext: {
        fontSize: 18,
        marginLeft: 5,  
    },
    icon: {
        marginTop: -5,
    },
    nexticon: {
        marginTop: 2,
        marginLeft: 'auto'
    },
    profileSetting:{
        flexDirection:'row',
        padding:30
    },
    profileText: {
        marginLeft: 20,
        justifyContent:'center'
    },
    profileName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    profilePhone: {
        marginTop: 5,
        fontSize: 15
    },
    profileNexticon:{
        marginLeft: 'auto',
    },
})