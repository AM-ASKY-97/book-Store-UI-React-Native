import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/Home';
import Login from './Screens/Login';
import Singup from './Screens/Singup';
import Forget from './Screens/Forget';
import Dashboar from './Screens/Signedin/Dashboar';
import Mobile from "./Screens/Book/Mobile";
import Information from "./Screens/Book/Information";
import Web from "./Screens/Book/Web";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={Home}  options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="Singup" component={Singup}  options={{headerShown:false}}/>
        <Stack.Screen name="Forget" component={Forget}  options={{headerShown:false}}/>
        <Stack.Screen name="Dashbord" component={Dashboar}  options={{headerShown:false}}/>
        <Stack.Screen name="Mobile" component={Mobile} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Web" component={Web} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;