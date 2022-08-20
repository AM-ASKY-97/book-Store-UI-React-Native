import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, secureTextEntry} from 'react-native';

const Profile = () =>{
    return(
        <View style={styles.container}>
            <Text>Profile Page</Text>
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

export default Profile;