import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
const BufferScreen = ({navigation}) => {
  return (
    <View>
      <Text>{navigation.navigate('AddTask1')}</Text>
    </View>
  );
};

export default BufferScreen;
