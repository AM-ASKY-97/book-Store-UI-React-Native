import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, secureTextEntry} from 'react-native';

const Notification = () =>{
    return(
        <View style={styles.container}>
            <Text>Notification Page</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Notification;