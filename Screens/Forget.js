import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Forget = ({navigation}) => {

    const backNavigate = () => {
        navigation.navigate('Login');
    }
    
    return(
        <ScrollView>
            <View style={styles.container}>
                {/*Top View*/}
                <View style={styles.topView}>
                    <View>
                        <TouchableOpacity style={{flexDirection:'row',}} onPress={backNavigate}>
                            <View style={{width:30, height:30, borderWidth:1, marginLeft:25,borderColor:'white', alignItems:'center', justifyContent:'center', borderRadius:10}}>
                                <AntDesign name="left" size={20} style={{color:'#FFFCFC'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.image}
                            source={require('../assets/Images/password.png')}
                        />
                    </View>
                </View>

                {/*Buttom View*/}
                <View style={styles.bottomView}>
                    <View style={{justifyContent:'center', alignItems:'center', }}>
                        <Text style={{marginTop:15, fontSize:16, fontWeight:'bold', textAlign:'center', width:'88%'}}>Please enter your registered email address and we will email you a rest password link</Text>
                    </View>
                    {/*Txt Email*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={styles.txtEmail}>
                            <Icon name="email" size={30} style={{marginLeft:15, color:'#818181'}}/>
                            <View style={{ height: '100%', width: 1, backgroundColor: '#818181', marginLeft:15}}></View>
                            <TextInput
                                style={{height:50,width:'100%', fontSize:15, marginLeft:15, color:'#818181'}}
                                placeholder='E-mail'
                            />
                        </View>
                    </View>
                    
                    {/*btn Send reset link*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20,}}>
                        <TouchableOpacity style={styles.btnSingIn}>
                            <Text style={{color:'#FFFCFC', fontSize:20, marginLeft:80, fontWeight:'bold'}}>Send reset link</Text>
                            <AntDesign name="rightcircle" size={20} style={{marginLeft:50, color:'#FFFCFC'}}/>
                        </TouchableOpacity>
                    </View>
                    {/*Forgot your password*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:10,}}>
                        <TouchableOpacity style={styles.forget} onPress={backNavigate}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Back to Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar style="auto" />
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
        height:'50%',
        justifyContent:'center',
    },

    image:{
        width:300, 
        height:200,
    },


    bottomView:{
        width:'100%',
        height:'50%',
        paddingTop:20,
        backgroundColor:'#F4F4F4',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },

    txtEmail:{
        width:'90%', 
        height:50, 
        borderColor:'#818181', 
        borderWidth:1, 
        borderRadius:15,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center' 
    },

    btnSingIn:{
        width:'90%', 
        height:50, 
        backgroundColor:'#0984E3', 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:20,
        borderRadius:15, 
        flexDirection:'row'
    },

    forget:{
        width:'90%', 
        height:50,
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15, 
        flexDirection:'row',
        marginBottom:150
    }
});

export default Forget;