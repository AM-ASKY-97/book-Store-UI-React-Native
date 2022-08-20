import react from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Information = () =>{
    return(
        <View>
            <View style={styles.Book}>
                <View>
                    <Image style={styles.bookImage}
                        source={require('../../assets/Images/Cover2.jpg')}
                    />
                </View>

                <View>
                    <Text style={styles.EEI}>EEI3266 - Information Systems {'\n'}and Data Management</Text>
                </View>
            </View>

            <View style={{margin:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Author : </Text>
                <Text style={{fontSize:20,}}>Ms. Kushani Bandara</Text>
            </View>

            <View style={{margin:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Description : </Text>
                <Text style={{fontSize:18, textAlign:'justify'}}>You have logged into the course on EEI3266 - Information Systems and Data Management of the Bachelor of Software Engineering Honours degree programme. This is a 2 Credit compulsory course offered in Year 1. The aim of this course is to teach you the basic concepts of database management systems and apply them in practical situations with good practices. This course consists of 4  Units</Text>
            </View>

            <View style={{margin:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Price : </Text>
                <Text style={{fontSize:18, textAlign:'justify'}}>850.00</Text>
            </View>

            {/*Sign up now*/}
            <View style={{justifyContent:'center', alignItems:'center', marginTop:20,}}>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={{color:'#FFFCFC', fontSize:20, fontWeight:'bold'}}>Add To Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bookImage:{
        width:75,
        height:75,
        borderRadius:10,
        padding:10
    },

    Book:{
        margin:20,
        flexDirection:'row',
    },

    EEI:{
        marginLeft:20,
        fontSize:20,
    },

    btnRegister:{
        width:'90%', 
        height:50, 
        backgroundColor:'#005CA4', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15, 
        flexDirection:'row',
        marginBottom:100
    }

});

export default Information;