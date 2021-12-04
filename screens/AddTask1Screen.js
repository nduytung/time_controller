import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {color} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const AddTask1Screen = ({navigation}) => {
  const [task1Info, setTask1Info] = useState({
    taskname: '',
    description: '',
  });
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.addTittle}>Thêm task</Text>
        <View style={styles.viewtext}>
          <Text style={styles.text}>
            Tất cả các trường bên dưới đều là BẮT BUỘC
          </Text>
        </View>
      </View>
      <View style={styles.addtask1header}>
        <Text style={styles.textdetail}>Tên task</Text>

        <TextInput
          onChangeText={text => setTask1Info({...task1Info, taskname: text})}
          placeholder="Tên task..."
          style={styles.taskInput}
        />
        <Text style={styles.textdetail}>Loại công việc </Text>

        <TextInput placeholder="Loại công việc..." style={styles.taskInput} />
        <Text style={styles.textdetail}>Chi tiết</Text>
        <TextInput
          onChangeText={text => setTask1Info({...task1Info, description: text})}
          multiline={true}
          numberOfLines={15}
          style={styles.taskdetailInput}
        />
      </View>
      <View style={styles.addtask1footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddTask2', {task1Info});
          }}
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

export default AddTask1Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    height: '100%',
    justifyContent: 'space-between',
  },
  addTittle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  viewtext: {
    height: 30,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '300',
    textAlign: 'left',
    color: 'black',
  },
  addtask1footer: {},
  taskInput: {
    marginVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 15,
    overflow: 'hidden',
    borderColor: 'gray',
  },
  textdetail: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    textAlignVertical: 'top',
  },
  taskdetailInput: {
    marginTop: 15,
    height: 300,
    borderRadius: 15,
    borderColor: 'gray',
    padding: 15,
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderColor: '#31BAFD',
    borderWidth: 1,
    marginLeft: 'auto',
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
