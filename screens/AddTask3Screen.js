import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AddTask3Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.addTittle}>Thêm task</Text>
      <View style={styles.viewtext}>
        <Text style={styles.text}>Bắt buộc</Text>
      </View>
      <View style={styles.addtask1header}>
        <TextInput
          placeholder="Thời gian ước lượng (min)"
          style={styles.timeInput}
        />
      </View>
      <View style={styles.addtask1footer}>
        <Text style={{fontSize: 16, marginTop: 15, color: 'black'}}>
          Bước 3/3
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={styles.circleblue} />
          <View style={styles.straight} />
          <View style={[styles.circleblue, {marginLeft: 'auto'}]} />
          <View style={styles.straight} />
          <View style={[styles.circleblue, {marginLeft: 'auto'}]} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={[
            styles.buttonNext,
            {
              borderColor: '#4dc2f8',
              borderWidth: 1,
              marginTop: 40,
            },
          ]}>
          <LinearGradient
            colors={['#5db8fe', '#39cff2']}
            style={styles.buttonNext}>
            <Text style={[styles.textNext, {color: 'white'}]}>Tiếp Tục</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask3Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
  },
  addTittle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },
  addtask1header: {
    flex: 0.7,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#ffed63',
  },
  viewtext: {
    width: 110,
    height: 30,
    marginBottom: -30,
    marginTop: 25,
    marginLeft: 15,
    zIndex: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    color: 'black',
  },
  addtask1footer: {
    flex: 0.2,
  },
  timeInput: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#31BAFD',
    fontSize: 16,
  },
  textdetail: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    textAlignVertical: 'top',
    multiline: 'true',
  },
  taskdetailInput: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    flex: 0.9,
    textAlignVertical: 'top',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderColor: '#31BAFD',
    borderWidth: 1,
  },
  circleblue: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#31BAFD',
  },
  straight: {
    backgroundColor: '#31BAFD',
    width: Dimensions.get('window').width / 3,
    height: 10,
    marginTop: 15,
    marginLeft: -1,
  },
  textNext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonNext: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
