import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const Home = ({navigation}) =>{

    const navigate = () => {
        navigation.navigate('Login');
    }

    return(
       <ScrollView>
            <View style={styles.container}>
                <View style={{marginTop:150}}>
                    <Image style={{width:332, height:237}}
                        source={require('../assets/Images/Logo.png')}
                    />
                </View>

                <View>
                    <Text style={styles.bookShop}>Online Book Shop</Text>
                </View>

                <View style={{width:'90%'}}>
                    <Text style={styles.lorem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
                    <TouchableOpacity style={styles.btnTouch} onPress ={navigate}>
                            <Text style={styles.btnSing}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CECCCC',
      alignItems: 'center',
    },

    bookShop:{
        marginTop:50,
        fontSize:30,
        fontWeight:'bold',
    },

    lorem:{
        marginTop:30,
        fontSize:14,
        textAlign:'center',
    },

    btnTouch:{
        marginTop:100,
        width:'90%', 
        height:50, 
        backgroundColor:'#0984E3', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:15,
    },

    btnSing:{
        color:'#FFFCFC', 
        fontSize:20, 
        fontWeight:'bold',
    }
  });

export default Home;