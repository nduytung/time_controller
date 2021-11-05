import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Login from './screens/Login';
import RootStackScreen from "./screens/RootStack";
import RankScreen from './screens/RankScreen';


const App = () => {
  //dua screen can hien thi vao day
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
    //<RankScreen></RankScreen>
  )
};

export default App;
