import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Login = ({navigation}) => {

    const navigate = () => {
        navigation.navigate('Singup');
    }

    const Forget = () => {
        navigation.navigate('Forget')
    }

    const Dashbord = () =>{
        navigation.navigate('Dashbord')
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                {/*Top View*/}
                <View style={styles.topView}>
                    <View>
                        <TouchableOpacity style={{flexDirection:'row',}}>
                            <View style={{width:30, height:30, borderWidth:1, marginLeft:25,borderColor:'white', alignItems:'center', justifyContent:'center', borderRadius:10}}>
                                <AntDesign name="left" size={20} style={{color:'#FFFCFC'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image style={styles.image}
                            source={require('../assets/Images/Logo-1.png')}
                        />
                    </View>
                </View>

                {/*Buttom View*/}
                <View style={styles.bottomView}>
                    <Text style={{marginLeft:25, marginTop:15, fontSize:20, fontWeight:'bold',}}>Welcome back</Text>
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
                    {/*Txt Password*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={styles.txtPassword}>
                            <Ionicons name="key-outline" size={30} style={{marginLeft:15, color:'#818181'}}/>
                            <View style={{ height: '100%', width: 1, backgroundColor: '#818181', marginLeft:15}}></View>
                            <TextInput
                                style={{height:50,width:'100%', fontSize:15, marginLeft:15, color:'#818181'}}
                                placeholder='Password'
                            />
                        </View>
                    </View>
                    {/*btn Sing In*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20,}}>
                        <TouchableOpacity style={styles.btnSingIn} onPress ={Dashbord}>
                            <Text style={{color:'#FFFCFC', fontSize:20, marginLeft:110, fontWeight:'bold'}}>Sing In</Text>
                            <AntDesign name="rightcircle" size={20} style={{marginLeft:100, color:'#FFFCFC'}}/>
                        </TouchableOpacity>
                    </View>
                    {/*Forgot your password*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:10,}}>
                        <TouchableOpacity style={styles.forget} onPress={Forget}>
                            <Text style={{color:'blue', fontSize:15,}}>Forgot your password ?</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:5,}}>
                        <View style={{width:'90%', borderWidth:0.5}}></View>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:15,}}>
                        <View><Text>Or</Text></View>
                    </View>
                    {/*Sign up now*/}
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20,}}>
                        <TouchableOpacity style={styles.btnRegister} onPress ={navigate}>
                            <Text style={{color:'#FFFCFC', fontSize:20, marginLeft:90, fontWeight:'bold'}}>Sign up now</Text>
                            <Entypo name="add-user" size={20} style={{marginLeft:70, color:'#FFFCFC'}}/>
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
        height:'40%',
        justifyContent:'center',
    },

    image:{
        width:260, 
        height:200,
    },

    bottomView:{
        width:'100%',
        height:'60%',
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
        flexDirection:'row'
    },

    forget:{
        width:'90%', 
        height:50,
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15, 
        flexDirection:'row'
    },

    btnRegister:{
        width:'90%', 
        height:50, 
        backgroundColor:'#2ECC71', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15, 
        flexDirection:'row',
        marginBottom:100
    }
});

export default Login;