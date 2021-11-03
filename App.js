import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Login from './screens/Login';
import RootStackScreen from "./screens/RootStack";
const App = () => {
  //dua screen can hien thi vao day
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  )
};

export default App;
