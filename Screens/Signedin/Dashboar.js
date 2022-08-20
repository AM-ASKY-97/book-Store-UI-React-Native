import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Dashome from '../Signedin/DasHome';
import Profile from "../Signedin/Profile";
import Notification from '../Signedin/Notification';


const Tab = createBottomTabNavigator();

const Dashboar = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Dashome}
                options={{
                tabBarLabel: 'Home',
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                ),
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={Notification}
                options={{
                tabBarLabel: 'Notifications',
                headerShown:true,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="notifications-outline" color={color} size={size} />
                ),
                }}
            />

            <Tab.Screen
                name="User"
                component={Profile}
                options={{
                tabBarLabel: 'User',
                headerShown:true,
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="user" color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Dashboar;