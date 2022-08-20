import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Singup = ({navigation}) => {

    const navigate = () => {
        navigation.navigate('Singup');
    }

    const backNavigate = () => {
        navigation.navigate('Login');
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                {/*Top View*/}
                <View style={styles.topView}>
                    <View>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress ={backNavigate}>
                            <View style={{width:30, height:30, borderWidth:1, marginLeft:25,borderColor:'white', alignItems:'center', justifyContent:'center', borderRadius:10}}>
                                <AntDesign name="left" size={20} style={{color:'#FFFCFC'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.image}
                            source={require('../assets/Images/information.png')}
                        />
                    </View>
                </View>

                {/*Buttom View*/}
                <View style={styles.bottomView}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{marginTop:15, fontSize:24, fontWeight:'bold'}}>Create  Your Account</Text>
                        <Text style={{marginTop:2, fontSize:12}}>Please enter info to create account</Text>
                    </View>
                    {/*user name*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={styles.txtEmail}>
                            <AntDesign name="user" size={30} style={{marginLeft:15, color:'#818181'}}/>
                            <View style={{ height: '100%', width: 1, backgroundColor: '#818181', marginLeft:15}}></View>
                            <TextInput
                                style={{height:50,width:'100%', fontSize:15, marginLeft:15, color:'#818181'}}
                                placeholder='User Name'
                            />
                        </View>
                    </View>
                    {/*e-mail*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={styles.txtPassword}>
                            <Icon name="email" size={30} style={{marginLeft:15, color:'#818181'}}/>
                            <View style={{ height: '100%', width: 1, backgroundColor: '#818181', marginLeft:15}}></View>
                            <TextInput
                                style={{height:50,width:'100%', fontSize:15, marginLeft:15, color:'#818181'}}
                                placeholder='Password'
                            />
                        </View>
                    </View>
                    {/*Txt Password*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={styles.txtPassword}>
                            <Ionicons name="key-outline" size={30} style={{marginLeft:15, color:'#818181'}}/>
                            <View style={{ height: '100%', width: 1, backgroundColor: '#818181', marginLeft:15}}></View>
                            <TextInput
                                style={{height:50,width:'65%', fontSize:15, marginLeft:15, color:'#818181'}}
                                placeholder='Password'
                            />
                            <Feather name="eye-off" size={30} style={{color:'#818181'}}/>
                        </View>
                    </View>
                    {/*Txt Password*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={styles.txtPassword}>
                            <Ionicons name="key-outline" size={30} style={{marginLeft:15, color:'#818181'}}/>
                            <View style={{ height: '100%', width: 1, backgroundColor: '#818181', marginLeft:15}}></View>
                            <TextInput
                                style={{height:50,width:'65%', fontSize:15, marginLeft:15, color:'#818181'}}
                                placeholder='Re-type password'
                            />
                            <Feather name="eye-off" size={30} style={{color:'#818181'}}/>
                        </View>
                    </View>
                    {/*btn Sing In*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20,}}>
                        <TouchableOpacity style={styles.btnSingIn}>
                            <Text style={{color:'#FFFCFC', fontSize:20, marginLeft:110, fontWeight:'bold'}}>Sing In</Text>
                            <AntDesign name="rightcircle" size={20} style={{marginLeft:100, color:'#FFFCFC'}}/>
                        </TouchableOpacity>
                    </View>
                     {/*Already have an account*/}
                     <View style={{justifyContent:'center', alignItems:'center', marginTop:6,}}>
                        <TouchableOpacity style={styles.forget} onPress ={backNavigate}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Already have an account ? <Text style={{color:'blue'}}>Login here</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#2980B9',
        justifyContent:'center'
    },

    topView:{
        width:'100%',
        height:'35%',
        justifyContent:'center',
    },

    image:{
        width:260, 
        height:160,
    },

    bottomView:{
        width:'100%',
        height:'65%',
        backgroundColor:'#F4F4F4',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },

    txtEmail:{
        width:'90%', 
        height:50, 
        borderColor:'#818181', 
        borderWidth:1, 
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center' 
    },

    txtPassword:{
        width:'90%', 
        height:50, 
        borderColor:'#818181', 
        borderWidth:1, 
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center' 
    },

    btnSingIn:{
        width:'90%', 
        height:50, 
        backgroundColor:'#0984E3', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15, 
        flexDirection:'row',
        
    },

    forget:{
        width:'90%', 
        height:50,
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15, 
        flexDirection:'row',
        marginBottom:100
    },
});

export default Singup;