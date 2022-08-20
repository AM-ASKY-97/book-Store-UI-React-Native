import react from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const DasHome = ({navigation}) =>{

    const Mobile = () =>{
        navigation.navigate('Mobile');
    }

    const Information = () =>{
        navigation.navigate('Information');
    }

    const Web = () =>{
        navigation.navigate('Web');
    }
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={{margin:15}}>
                    <View style={styles.user}>
                        <Text style={{fontWeight:'bold', marginTop:5, fontSize:20}}>Online Learning</Text>

                        <View style={{fontWeight:'bold', marginTop:10, marginLeft:110}}>
                            <TouchableOpacity>
                                <Fontisto name="search"  size={20} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <Image style={styles.image}
                                source={require('../../assets/Images/IMG-5353.jpg')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Overview}>
                        <Text style={{fontWeight:'bold'}}>Book Overview</Text>

                        {/* EEI3269 - Introduction to Mobile */}
                        <TouchableOpacity onPress={Mobile}>
                            <View style={styles.bookBorder}>
                                <View>
                                    <Image style={styles.bookImage}
                                        source={require('../../assets/Images/Mobile.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.bookText}>EEI3269 - Introduction to Mobile {'\n'}Application Development</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                         {/* EEI3266 - Information Systems */}
                         <TouchableOpacity onPress={Information}>
                            <View style={styles.bookBorder}>
                                <View>
                                    <Image style={styles.bookImage}
                                        source={require('../../assets/Images/Cover2.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.bookText}>EEI3266 - Information Systems {'\n'}and Data Management</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* EEI3266 - Web Development */}
                        <TouchableOpacity onPress={Web}>
                            <View style={styles.bookBorder}>
                                <View>
                                    <Image style={styles.bookImage}
                                        source={require('../../assets/Images/web.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.bookText}>EEI3346 - WEB Development</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* EEX3467 - Software Engineering Concepts and Programming */}
                        <TouchableOpacity onPress={Web}>
                            <View style={styles.bookBorder}>
                                <View>
                                    <Image style={styles.bookImage}
                                        source={require('../../assets/Images/LMS_cover.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.bookText}>EEX3467 - Software Engineering Concepts and Programming</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* EEI3262 - Introduction to Object Oriented Programming*/}
                        <TouchableOpacity onPress={Web}>
                            <View style={styles.bookBorder}>
                                <View>
                                    <Image style={styles.bookImage}
                                        source={require('../../assets/Images/oop.png')}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.bookText}>EEI3262 - Introduction to Object {'\n'}Oriented Programming</Text>
                                </View>
                            </View>
                        </TouchableOpacity>                   
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    user:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },

    image:{
        width:35,
        height:35,
        borderRadius:50
    },

    Overview:{
        marginTop:50,
        borderWidth:1,
        borderColor:'#CECCCC',
        padding:10,
        borderRadius:5
    },

    bookBorder:{
        marginTop:20,
        borderWidth:1,
        borderColor:'#CECCCC',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        flexDirection:'row',
        width:'100%'
    },

    bookImage:{
        width:60,
        height:50
    },

    bookText:{
        marginLeft:30,
        fontWeight:'bold',
        textAlign:'justify',
        fontSize:15,
    }
});

export default DasHome;