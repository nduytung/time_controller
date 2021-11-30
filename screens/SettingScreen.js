import React from 'react';
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
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import settingStyle from '../public/assets/css/settingStyle';

const SettingScreen = ({navigation}) => {
  return (
    <View style={settingStyle.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={settingStyle.screenname}>Settings</Text>
        </View>
        <View style={settingStyle.profileSetting}>
          <Avatar.Image
            source={require('../public/assets/image/duck.gif')}
            size={100}
          />
          <View style={settingStyle.profileText}>
            <Text style={settingStyle.profileName}>Quach Tuan Anh</Text>
            <Text style={settingStyle.profilePhone}>0899322092</Text>
          </View>
          <View style={{marginLeft: 'auto', justifyContent: 'center'}}>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              onPress={() => navigation.navigate('ProfileScreen')}
              style={settingStyle.profileNexticon}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={settingStyle.settingelements}>
            <Ionicons
              name="notifications-circle"
              color="#f75348"
              size={35}
              style={settingStyle.icon}
            />
            <Text style={settingStyle.settingtext}>Notifications</Text>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              style={settingStyle.nexticon}
            />
          </View>
          <View style={settingStyle.settingelements}>
            <Ionicons
              name="ios-cloud-circle"
              color="#f5f12c"
              size={35}
              style={settingStyle.icon}
            />
            <Text style={settingStyle.settingtext}>Privacy</Text>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              style={settingStyle.nexticon}
            />
          </View>
          <View style={settingStyle.settingelements}>
            <Ionicons
              name="md-checkmark-done-circle-sharp"
              color="#18d5f2"
              size={35}
              style={settingStyle.icon}
            />
            <Text style={settingStyle.settingtext}>Security</Text>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              style={settingStyle.nexticon}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={settingStyle.settingelements}>
            <Ionicons
              name="md-heart-circle-sharp"
              color="#d857f2"
              size={35}
              style={settingStyle.icon}
            />
            <Text style={settingStyle.settingtext}>Main</Text>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              style={settingStyle.nexticon}
            />
          </View>
          <View style={settingStyle.settingelements}>
            <Ionicons
              name="md-navigate-circle"
              color="blue"
              size={35}
              style={settingStyle.icon}
            />
            <Text style={settingStyle.settingtext}>Appearance</Text>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              style={settingStyle.nexticon}
            />
          </View>
          <View style={settingStyle.settingelements}>
            <Ionicons
              name="ios-list-circle"
              color="#3af20c"
              size={35}
              style={settingStyle.icon}
            />
            <Text style={settingStyle.settingtext}>Language</Text>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              style={settingStyle.nexticon}
            />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={settingStyle.settingelements}>
            <Ionicons
              name="help-circle"
              color="#f0a259"
              size={35}
              style={settingStyle.icon}
            />
            <Text style={settingStyle.settingtext}>Ask a Question</Text>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              style={settingStyle.nexticon}
            />
          </View>
          <View style={settingStyle.settingelements}>
            <Ionicons
              name="ios-information-circle"
              color="#9a09ed"
              size={35}
              style={settingStyle.icon}
            />
            <Text style={settingStyle.settingtext}>FAQ</Text>
            <MaterialIcons
              name="navigate-next"
              color="grey"
              size={25}
              style={settingStyle.nexticon}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;
