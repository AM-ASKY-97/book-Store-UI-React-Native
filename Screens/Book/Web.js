import react from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Web = () =>{
    return(
        <View>
            <View style={styles.Book}>
                <View>
                    <Image style={styles.bookImage}
                        source={require('../../assets/Images/web.jpg')}
                    />
                </View>

                <View>
                    <Text style={styles.EEI}>EEI3346 - WEB Development</Text>
                </View>
            </View>

            <View style={{margin:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Author : </Text>
                <Text style={{fontSize:20,}}>Ms. Ahalikai Suthaharan</Text>
            </View>

            <View style={{margin:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Description : </Text>
                <Text style={{fontSize:18, textAlign:'justify'}}>You have logged in to the EEI3346 - Web Application Development course offered for Bachelor of Software Engineering Honours degree programme. This is a 3 credit compulsory course offered in Year 1. 
                The aim of this course is to develop simple web applications using fundamental concepts, technologies, and techniques. This course is focused on Front-end development of Web applications. This course consists of 5  Units:</Text>
            </View>

            <View style={{margin:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Price : </Text>
                <Text style={{fontSize:18, textAlign:'justify'}}>950.00</Text>
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

export default Web;